import React from "react";
import "./Select-one-table.css"

import MainBtnLink from "../Main-btn-link";

const SelectOneTable =(props)=>{

    // let listBtn = props.selectOneData.list.map(({id,type})=>{
    //     return <MainBtnLink name={`Таблиця №${id}`} id={`edit-table/${id}`}/>
    // });

    return (
        <>
            <ul className="list">
                <MainBtnLink name={`Члени студ. орг.`} id={`edit-table/1`}/>
                <MainBtnLink name={`Комітети`} id={`edit-table/2`}/>
                <MainBtnLink name={`Заходи`} id={`edit-table/3`}/>
                <MainBtnLink name={`Партнери`} id={`edit-table/4`}/>
                <MainBtnLink name={`Учасники заходів`} id={`edit-table/5`}/>
                <MainBtnLink name={`Друкована продукція`} id={`edit-table/6`}/>
                <MainBtnLink name={`Локації`} id={`edit-table/7`}/>
                <MainBtnLink name={`Тренери`} id={`edit-table/8`}/>
            </ul>
        </>
    )
};

export default SelectOneTable
