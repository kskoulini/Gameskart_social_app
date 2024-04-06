import React,{useEffect, useState} from "react";
import './AddFriendPage.css';

import GameRow from "./GameRow/GameRow";

const AddFriendPage = (props) => {

    const [data, setData] = useState([]);

    const [userId, setUserId] = useState(0);

    const getFriendsHandler = () => {


        if(userId > 0){
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };
              
              fetch(`http://localhost:5000/find_friends?user_id=${userId}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    console.log(JSON.parse(result)['friends'])
                    setData([...JSON.parse(result)['friends']])
                })
                .catch((error) => console.error(error));
    
        };
    }

    return(
        <section id="add-friends" className="add-friend-section">
            <h1>Find your friends</h1>
            <div className="location-input">
                <input type="text" placeholder="Enter location" onKeyUp={(event) => setUserId(Number(event.target.value))} />
                <button type="submit" onClick={getFriendsHandler}>Go</button>
            </div>
            <section className="friends-display">
                <GameRow data={data}></GameRow>
            </section>
        </section>
    )
}

export default AddFriendPage;