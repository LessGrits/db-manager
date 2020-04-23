import React from "react";
import "./Select-one-query.css"

import MainBtnLink from "../Main-btn-link";

const SelectOneQuery =(props)=>{
    let listBtn = props.selectOneData.list.map(({id,type})=>{
        return <MainBtnLink name={`Запит №${id}`} id={`make-query/${id}`}/>
    });

    return (
        <>
            <ul className="list">
                    {listBtn}
                <MainBtnLink name={`Запит №9`} id={`make-query/9`}/>
            </ul>
        </>
    )
};

export default SelectOneQuery
