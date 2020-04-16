import React from "react";
import "./Select-one.css"

import MainBtnLink from "../Main-btn-link";

const SelectOne =(props)=>{
    const type = props.id;
    
    let listBtn = props.selectOneData.map(({id,type})=>{
        return <MainBtnLink name={`Запити №${id}`} id={`${type}/${id}`}/>
    });

    return (
        <>
            <ul className="list">
                    {listBtn}
            </ul>
        </>
    )
};

export default SelectOne
