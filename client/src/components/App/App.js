import React from 'react';
import './App.css';

import Header from '../Header'
import Main from "../Main";
import SelectOne from "../Select-one";
import EditTable from "../Edit-table";
import MakeQuery from "../Make-query";
import {BrowserRouter, Route} from "react-router-dom";

 const App = (props)=> {
    return (
        <>
            <BrowserRouter>
                <div className="cover">
                    <div className="center">
                        <Header/>
                        <Route exact path={"/"} component={Main}/>
                        <Route path={"/select-one"} render={()=><SelectOne selectOneData={props.selectOneData}  />}/>
                        <Route path={"/make-query"} component={MakeQuery}/>
                        <Route path={"/edit-table"} component={EditTable}/>
                        <footer className="footer">
                            <p> &copy; Підготував студент 2КН-17Б Гриценюк О.В.</p>
                        </footer>
                    </div>
                </div>
            </BrowserRouter>
        </>

    );
}

export default App;
