import React from "react";
import "./Edit-table6.css"



function EditTable6() {
    return (
        <div className={"table-cover"}>
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
                    <td className="table-btn">
                        <button type="button" className="btn btn-warning">edit</button>
                    </td>
                    <td className="table-btn">
                        <button type="button" className="btn btn-danger">del</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td className="table-btn">
                        <button type="button" className="btn btn-warning">edit</button>
                    </td>
                    <td className="table-btn">
                        <button type="button" className="btn btn-danger">del</button>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}


export default EditTable6