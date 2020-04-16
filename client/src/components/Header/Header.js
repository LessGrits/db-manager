import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <><header className="header">
            <h1><NavLink to="/">Студентська організація</NavLink></h1>
        </header></>
    )
}

export default Header