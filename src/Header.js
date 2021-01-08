import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="images/nlogo.png" alt="netflix"/>
            <img className="header_user" src="images/user.jpg" alt="user" />
        </div>
    )
}

export default Header
