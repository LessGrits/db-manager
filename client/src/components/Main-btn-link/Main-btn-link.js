import React from "react";
import {NavLink} from "react-router-dom";
import './Main-btn-link.css'

const MainBtnLink = (props)=>{
    const {name} = props;
    const {id} = props;
    const {className} = props;
    return(
        <li ><NavLink className={className} to={id}><span>{name}</span></NavLink></li>
    )
};

export default MainBtnLink;

