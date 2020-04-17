import React from "react";
import "./Main.css"
import MainBtnLink from "../Main-btn-link";



const Main = (props) =>{
    debugger;
    return(
        <><section className="body">
            <ul className="list">
                <MainBtnLink className={"mainBtn"}  name={"Запити"} id={"select-one-query"}/>
                <MainBtnLink className={"mainBtn"}  name={"Редагувати"} id={"select-one-table"}/>
            </ul>
        </section></>
    )
};



export default Main;