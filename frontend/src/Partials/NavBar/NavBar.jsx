import React from "react";
import './NavBar.css';

const NavBar = (props) => {
    return(
        <nav id='main-nav'>
            <div className="online-count-container">
                <i className="online-indicator"></i>
                <span className="online-count">35541 Online</span>
            </div>
            <ul className="nav-menu">
                <li className="nav-menu-item">FAQ</li>
                <li className="nav-menu-item">Login</li>
            </ul>
        </nav>
    )
}

export default NavBar;