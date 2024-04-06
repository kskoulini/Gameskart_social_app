import React,{useEffect, useState} from "react";
import './AddFriendPage.css';

import GameRow from "./GameRow/GameRow";

const AddFriendPage = (props) => {

    const [data, setData] = useState([]);

    const [userId, setUserId] = useState(0);

    const getFriendsHandler = () => {
        if(userId > -1){
            setData([
                [20, 0.024999999999999467, 0], 
                [6, 0.128571428571429, 0], 
                [7, 0.22500000000000053, 0], 
                [14, 0.3200000000000003, 0], 
                [18, 0.47499999999999964, 0]])
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