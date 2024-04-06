import React from "react";
import './UserCard.css';


const UserCard = (props) => {

    return(
        <div className="user-card">
            <button className="add-friend-btn">
                <span>Add Friend</span>
                <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3169 20.8614H20.8614M20.8614 20.8614H28.406M20.8614 20.8614V13.3169M20.8614 20.8614V28.406" stroke="#FFBE45" strokeWidth="2.8292" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.8613 39.7227C31.2781 39.7227 39.7227 31.2781 39.7227 20.8613C39.7227 10.4445 31.2781 2 20.8613 2C10.4445 2 2 10.4445 2 20.8613C2 31.2781 10.4445 39.7227 20.8613 39.7227Z" stroke="#FFBE45" strokeWidth="2.8292" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="user-details">
                <span className="user-name">User id: { props.user[0] }</span>
                <span className="user-location">
                    <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2773 9.2251C17.2773 13.6434 9.27734 21.2251 9.27734 21.2251C9.27734 21.2251 1.27734 13.6434 1.27734 9.2251C1.27734 4.80682 4.85906 1.2251 9.27734 1.2251C13.6956 1.2251 17.2773 4.80682 17.2773 9.2251Z" fill="#BF360C" stroke="white" strokeWidth="2"/>
                        <path d="M9.27734 10.2251C9.82964 10.2251 10.2773 9.7774 10.2773 9.2251C10.2773 8.67282 9.82964 8.2251 9.27734 8.2251C8.72504 8.2251 8.27734 8.67282 8.27734 9.2251C8.27734 9.7774 8.72504 10.2251 9.27734 10.2251Z" fill="#BF360C" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    { Math.round( props.user[1] * 100) / 100}% location match
                </span>
                {/* <span className="user-distance">9km away</span> */}
            </div>
        </div>
    )
}

export default UserCard;