import React from "react";
import "./Main.css"
import MainBtnLink from "../Main-btn-link";



const Main = (props) =>{
    return(
        <><section className="body">
            <ul className="list">
                <MainBtnLink className={"mainBtn mainStr"}  name={"Пошук інформації"} id={"select-one-query"}/>
                <MainBtnLink className={"mainBtn mainStr"}  name={"Редагування"} id={"select-one-table"}/>
            </ul>
        </section></>
    )
};



export default Main;