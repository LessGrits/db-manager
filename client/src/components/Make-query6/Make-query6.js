import React from "react";
import './Make-query6.css'

function MakeQuery6(){
return(
    <>

        <form action="#">
            <h2>Запит №1</h2>
            <div className="select-row">
                <label htmlFor="">критерій
                <select className="custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select></label>
                <label htmlFor="">критерій
                <select className="custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select></label>
            </div>
            <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">Зробити запит</button>
        </form>
        <table className="table ">
            <thead className="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
            </tr>
            </tbody>
        </table>
    </>
)
}

export default MakeQuery6;