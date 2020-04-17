import React, {useEffect, useState} from "react";
import "./Edit-table1.css"
import '../Add-record/Add-record.css'


const EditTable1 = () => {
    const [records, setRecords] = useState([]);

    const deleteRecord = async (id) => {
        try {
            const deleteRecord = await fetch(`http://localhost:5000/records/${id}`, {
                method: "DELETE"
            });
            setRecords(records.filter((record) => record.id !== id))
        } catch (err) {
            console.error(err.message)
        }
    };

    const getRecords = async () => {
        try {
            const response = await fetch("http://localhost:5000/records");
            const jsonDate = await response.json();

            setRecords(jsonDate[0]);

        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getRecords()


    }, []);

    let i = 1;


    const writeAtr = () => {
        return Object.keys(records[0]).map(el => {
            if (el === 'id') return;

            return <td>{el}</td>
        })
    };

    return (
        <div className={"table-cover"}>
            <h2>Members</h2>
            <table className="table ">
                <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    {
                        records[0] && writeAtr()
                    }
                </tr>
                </thead>
                <tbody>
                {
                    records.map((obj) => {
                        return (<tr key={obj.id}>
                            <td>{i++}</td>
                            {Object.keys(obj).map((atr) => {
                                if (atr === 'id') return;
                                return (
                                    <td>{obj[atr]}</td>
                                )
                            })}
                            <td className="table-btn">
                                <EditRecord listValue={Object.values(obj)}/>
                            </td>
                            <td className="table-btn">
                                <button type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteRecord(obj.id)}>del
                                </button>
                            </td>
                        </tr>)
                    })
                }
                {/*<tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Handle</th>
                </tr>
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
                </tr>*/}
                </tbody>
            </table>
            <AddRecord/>
        </div>
    )
};


//ADD

const AddRecord = () => {
    const [input1, setInput1] = useState("1111");
    const [input2, setInput2] = useState("2222");
    const [input3, setInput3] = useState("333");
    const [input4, setInput4] = useState("4444");
    const [input5, setInput5] = useState("55555");
    const [input6, setInput6] = useState("6666");
    const [input7, setInput7] = useState("777");

    const onSubmit = async e => {
        console.log('blet');
        e.preventDefault();
        try {
            const body = {input1, input2, input3, input4, input5, input6, input7};
            const response = await fetch(`http://localhost:5000/records`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(body);
            console.log(response);

            window.location = '/edit-table/1';
        } catch (err) {
            console.error(err.message)
        }
    };

    return (
        <>
            <div className="container">

                <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">Add
                    new record
                </button>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <form className={'d-flex add-record'} onSubmit={onSubmit}>
                                <label className={"d-flex align-items-center"}>
                                    full_name
                                    <input value={input1}
                                           onChange={e => setInput1(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    date_of_birth
                                    <input value={input2}
                                           onChange={e => setInput2(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    english_level
                                    <input value={input3}
                                           onChange={e => setInput3(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    committee
                                    <input value={input4}
                                           onChange={e => setInput4(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    date_of_joining
                                    <input value={input5}
                                           onChange={e => setInput5(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    age
                                    <input value={input6}
                                           onChange={e => setInput6(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    status
                                    <input value={input7}
                                           onChange={e => setInput7(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>

                                <button type="submit" className="btn btn-success mx-auto add-btn">Add new record
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

//EDIT
const EditRecord = (props) => {

    const [input1, setInput1] = useState("111");
    const [input2, setInput2] = useState("222");
    const [input3, setInput3] = useState("3333");
    const [input4, setInput4] = useState("444");
    const [input5, setInput5] = useState("5555");
    const [input6, setInput6] = useState("666");
    const [input7, setInput7] = useState("7477");

    const onSubmit = async e => {
        console.log('blet');
        e.preventDefault();
        try {
            const body = {input1, input2, input3, input4, input5, input6, input7};
            const response = await fetch(`http://localhost:5000/records`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(body);
            console.log(response);

            window.location = '/edit-table/1';
        } catch (err) {
            console.error(err.message)
        }
    };
    console.log(props.listValue);
    return (
        <>

            <div className="container">
                <button type="button" className="btn btn-warning btn-lg" data-toggle="modal" data-target="#myModal">edit
                </button>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <form className={'d-flex add-record'} onSubmit={onSubmit}>
                                <label className={"d-flex align-items-center"}>
                                    full_name
                                    <input value={input1}
                                           onChange={e => setInput1(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    date_of_birth
                                    <input value={input2}
                                           onChange={e => setInput2(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    english_level
                                    <input value={input3}
                                           onChange={e => setInput3(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    committee
                                    <input value={input4}
                                           onChange={e => setInput4(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    date_of_joining
                                    <input value={input5}
                                           onChange={e => setInput5(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    age
                                    <input value={input6}
                                           onChange={e => setInput6(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    status
                                    <input value={input7}
                                           onChange={e => setInput7(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <button type="submit" className="btn btn-warning mx-auto add-btn">edit record
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default EditTable1