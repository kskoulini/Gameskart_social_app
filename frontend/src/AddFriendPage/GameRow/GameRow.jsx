import React, { useEffect, useState } from "react";
import './GameRow.css';

import UserCard from '../../UserCard/UserCard';

const GameRow = (props) => {

    const [data, setData] = useState([
        [20, 0.024999999999999467, 0], 
        [6, 0.128571428571429, 0], 
        [7, 0.22500000000000053, 0], 
        [14, 0.3200000000000003, 0], 
        [18, 0.47499999999999964, 0]])

    const printFriendsHandler = () => {
        const friends = [];
        
        for(let i=0;i < data.length; i++){
            friends.push(<UserCard user={data[i]}></UserCard>)
        }

        return friends;
    }

    useEffect(() => {

    })

    return(
        <div className="game-row">
            <h3>Users Found:</h3>
            <div className="friends-list">
                { data.length ? [...printFriendsHandler()] : <span>Enter your user id to find users to connect with!</span>}
            </div>
        </div>
    )
}

export default GameRow;