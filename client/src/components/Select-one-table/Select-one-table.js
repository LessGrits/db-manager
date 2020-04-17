import React from "react";
import "./Select-one-table.css"

import MainBtnLink from "../Main-btn-link";

const SelectOneTable =(props)=>{

    let listBtn = props.selectOneData.list.map(({id,type})=>{
        return <MainBtnLink name={`Таблиця №${id}`} id={`edit-table/${id}`}/>
    });

    return (
        <>
            <ul className="list">
                    {listBtn}
            </ul>
        </>
    )
};

export default SelectOneTable
