import React from "react";
import {NavLink} from "react-router-dom";
import './Main-btn-link.css'

const MainBtnLink = (props)=>{
    const {name} = props;
    const {id} = props;
    return(
        <li ><NavLink to={id}>{name}</NavLink></li>
    )
};

export default MainBtnLink;

