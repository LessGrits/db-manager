import React, { useState} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from '../Header'


import Main from "../Main";
import SelectOneQuery from "../Select-one-query";
import SelectOneTable from "../Select-one-table";

import EditTable1 from "../Edit-table1";
import EditTable2 from "../Edit-table2";
import EditTable3 from "../Edit-table3";
import EditTable4 from "../Edit-table4";
import EditTable5 from "../Edit-table5";
import EditTable6 from "../Edit-table6";
import EditTable7 from "../Edit-table7";
import EditTable8 from "../Edit-table8";

import MakeQuery1 from "../Make-query1";
import MakeQuery2 from "../Make-query2";
import MakeQuery3 from "../Make-query3";
import MakeQuery4 from "../Make-query4";
import MakeQuery5 from "../Make-query5";
import MakeQuery6 from "../Make-query6";
import MakeQuery7 from "../Make-query7";
import MakeQuery8 from "../Make-query8";

 const App = (props)=> {

    return (
        <>
            <BrowserRouter>
                <div className="cover">
                    <div className="center">
                        <Header/>
                        <Route exact path={"/"} render={()=><Main /> } />
                        <Route path={"/select-one-query"} render={()=><SelectOneQuery selectOneData={props.state.selectOneData}  />}/>
                        <Route path={"/select-one-table"} render={()=><SelectOneTable selectOneData={props.state.selectOneData}  />}/>
                        <Route path={"/make-query/1"} component={MakeQuery1}/>
                        <Route path={"/make-query/2"} component={MakeQuery2}/>
                        <Route path={"/make-query/3"} component={MakeQuery3}/>
                        <Route path={"/make-query/4"} component={MakeQuery4}/>
                        <Route path={"/make-query/5"} component={MakeQuery5}/>
                        <Route path={"/make-query/6"} component={MakeQuery6}/>
                        <Route path={"/make-query/7"} component={MakeQuery7}/>
                        <Route path={"/make-query/8"} component={MakeQuery8}/>

                        <Route path={"/edit-table/1"} component={EditTable1}/>
                        <Route path={"/edit-table/2"} component={EditTable2}/>
                        <Route path={"/edit-table/3"} component={EditTable3}/>
                        <Route path={"/edit-table/4"} component={EditTable4}/>
                        <Route path={"/edit-table/5"} component={EditTable5}/>
                        <Route path={"/edit-table/6"} component={EditTable6}/>
                        <Route path={"/edit-table/7"} component={EditTable7}/>
                        <Route path={"/edit-table/8"} component={EditTable8}/>

                        <footer className="footer">
                            <p> &copy; Підготував студент 2КН-17Б Гриценюк О.В.</p>
                        </footer>
                    </div>
                </div>
            </BrowserRouter>
        </>

    );
};

export default App;
