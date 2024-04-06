import React from "react";
import './AddFriendPage.css';

import GameRow from "./GameRow/GameRow";

const AddFriendPage = (props) => {

    const gameData = {
        'Tic Tac Toc': 8,
        'Worlde': 8,
        'MineCraft': 8,
        'CounterStrike': 8,
        'Dota': 8,
        'Chess': 8,
        'Ludo': 8,
        'Rummy': 8,
        'Poker': 8,
        'Call of Duty': 8,
    }


    return(
        <section id="add-friends" className="add-friend-section">
            <h1>Find your friends</h1>
            <div className="location-input">
                <input type="text" placeholder="Enter location" />
                <button type="submit">Go</button>
            </div>
            <section className="friends-display">
                <GameRow></GameRow>
            </section>
        </section>
    )
}

export default AddFriendPage;