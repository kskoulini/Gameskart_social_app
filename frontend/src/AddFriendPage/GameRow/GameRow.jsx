import React, { useEffect, useState } from "react";
import './GameRow.css';

import UserCard from '../../UserCard/UserCard';

const GameRow = ({data}) => {

    const printFriendsHandler = () => {
        const friends = [];
        
        for(let i=0;i < data.length; i++){
            friends.push(<UserCard user={data[i]}></UserCard>)
        }

        return friends;
    }

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