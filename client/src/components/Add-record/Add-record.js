import React from "react";
import './Add-record.css';


function AddRecord(){
    return(
       <>
           <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">Add new record</button>
           <div id="myModal" className="modal" role="dialog">
               <div className="modal-dialog">
                   <div className="modal-content">
                       <div className="modal-body">
                            <form className={'d-flex add-record'}>
                                <label className={"d-flex align-items-center"}>
                                    First
                                    <input type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    First
                                    <input type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    First
                                    <input type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    First
                                    <input type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    First
                                    <input type="text" className={"form-control"}/>
                                </label>
                               <button type="button" className="btn btn-success mx-auto add-btn">Add new record</button>
                            </form>
                       </div>
                   </div>
               </div>
           </div>
       </>




    )
}

export default AddRecord;