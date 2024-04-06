from flask import Flask, request, jsonify
from pymongo import MongoClient
from threading import Thread
import math
import numpy as np

# Flask app setup
app = Flask(__name__)

# MongoDB Connection
client = MongoClient('mongodb://localhost:27017/')


def haversine(coord1, coord2):
    R = 6371  # Earth radius in kilometers
    lat1, lon1, lat2, lon2 = map(math.radians, [coord1[0], coord1[1], coord2[0], coord2[1]])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    return R * c

def calculate_average_skill(games):
    skill_scores = [game['Skill Score (out of 10)'] for game in games]
    return np.mean(skill_scores) if skill_scores else 0

def find_friends(user_id, client):
    db = client['Final']
    collection = db['final']

    user = collection.find_one({'_id': user_id})
    if not user:
        return "User not found"

    user_avg_skill = calculate_average_skill(user['game_details'])
    user_location = (user['Latitude'][0], user['Longitude'][0])
    user_pref_distance = user['MaxDistance for Connection (in Km)\n*Empty means any distance is fine'][0]

    potential_friends = []
    for data in collection.find({}):
        if data['_id'] != user_id:
            friend_avg_skill = calculate_average_skill(data['game_details'])
            skill_diff = abs(user_avg_skill - friend_avg_skill)
            distance = haversine(user_location, (data['Latitude'][0], data['Longitude'][0])) if not np.isnan(user_pref_distance) else 0

            if np.isnan(user_pref_distance) or distance <= user_pref_distance:
                potential_friends.append((data['_id'], skill_diff, distance))

    potential_friends.sort(key=lambda x: (x[1], x[2]))  # Sort by skill difference and distance
    return potential_friends[:5]

@app.route('/find_friends', methods=['GET'])
def get_friends():
    user_id = int(request.args.get('user_id'))
    print(user_id)
    if not user_id:
        return jsonify({"error": "No user_id provided in the headers"}), 400

    try:
        user_id = int(user_id)
        friends = find_friends(user_id, client)
        return jsonify({"user_id": user_id, "friends": friends})
    except ValueError:
        return jsonify({"error": "Invalid user_id format"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
# Function to run the Flask app
def run_app():
    app.run(port=5000, debug=False)

# # Running the Flask app in a separate thread
flask_thread = Thread(target=run_app)
flask_thread.start()
