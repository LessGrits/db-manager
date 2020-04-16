import React from "react";
import "./Main.css"
import {NavLink} from "react-router-dom";
import MainBtnLink from "../Main-btn-link";



function Main(){
    return(
        <><section className="body">
            <ul className="list">
                <MainBtnLink className={"mainBtn"} name={"Запити"} id={"query"}/>
                <MainBtnLink className={"mainBtn"} name={"Редагувати"} id={"edit"}/>
            </ul>
        </section></>
    )
}



export default Main;