import React, {useEffect, useState} from "react";
import "../Edit-table1/Edit-table1.css"



const url = "http://localhost:5000/print";

const EditTable6 = () => {
    const [records, setRecords] = useState([]);

    const deleteRecord = async (id) => {
        try {
            const deleteRecord = await fetch(`${url}/${id}`, {
                method: "DELETE"
            });
            setRecords(records.filter((record) => record.id !== id))
        } catch (err) {
            console.error(err.message)
        }
    };

    const getRecords = async () => {
        try {
            const response = await fetch(url);
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
            <h2>Друкована продукція</h2>
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
                                if(atr ==='img') return (<td><img className={'img'} src={require(`../App/img/productions/${obj[atr]}`)}  alt=""/></td>);
                                if (atr === 'id') return;
                                return (
                                    <td>{obj[atr]}</td>
                                )
                            })}
                            <td className="table-btn">
                                <EditRecord attr={Object.keys(obj)} listValue={Object.values(obj)}/>
                            </td>
                            <td className="table-btn">
                                <button type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteRecord(obj.id)}>Вид
                                </button>
                            </td>
                        </tr>)
                    })
                }
                </tbody>
            </table>
            <AddRecord attr={records[0] && Object.keys(records[0])} />
        </div>
    )
};

//ADD
const AddRecord = (props) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");
    const [input5, setInput5] = useState("");
    const [input6, setInput6] = useState("");
    const [input7, setInput7] = useState("");

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const body = {input1, input2, input3, input4, input5, input6, input7};
            const response = await fetch(`${url}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(body);
            console.log(response);

            window.location = '/edit-table/6';
        } catch (err) {
            console.error(err.message)
        }
    };

    console.log(props.attr);
    return (
        <>
            <div className="container">

                <button type="button" className="btn btn-success add-btn btn-lg" data-toggle="modal" data-target="#addModal">Додати запис
                </button>
                <div className="modal fade" id="addModal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <form className={'d-flex add-record'} onSubmit={onSubmit}>
                                <label className={"d-flex align-items-center"}>
                                    {props.attr && props.attr[1]}
                                    <input value={input1}
                                           onChange={e => setInput1(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {props.attr && props.attr[2]}
                                    <input value={input2}
                                           onChange={e => setInput2(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {props.attr && props.attr[3]}
                                    <input value={input3}
                                           onChange={e => setInput3(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {props.attr && props.attr[4]}
                                    <input value={input4}
                                           onChange={e => setInput4(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {props.attr && props.attr[5]}
                                    <input value={input5}
                                           onChange={e => setInput5(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {props.attr && props.attr[6]}
                                    <input value={input6}
                                           onChange={e => setInput6(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {props.attr && props.attr[7]}
                                    <input value={input7}
                                           onChange={e => setInput7(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <button type="submit" className="btn btn-success mx-auto add-btn">Додати запис</button>
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

    const {listValue, attr} = props;

    const [input1, setInput1] = useState(listValue[1]);
    const [input2, setInput2] = useState(listValue[2]);
    const [input3, setInput3] = useState(listValue[3]);
    const [input4, setInput4] = useState(listValue[4]);
    const [input5, setInput5] = useState(listValue[5]);
    const [input6, setInput6] = useState(listValue[6]);
    const [input7, setInput7] = useState(listValue[7]);

    const onSubmitEdit = async e => {
        e.preventDefault();
        try {
            const body = {input1, input2, input3, input4, input5, input6, input7};
            const response = await fetch(`${url}/${listValue[0]}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(`${url}/${listValue[0]}`);
            console.log(body);
            console.log(response);
            window.location = '/edit-table/6';
        } catch (err) {
            console.error(err.message)
        }
    };
    console.log(attr);
    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-warning btn-lg" data-toggle="modal"
                        data-target={`#id${listValue[0]}`}>Ред
                </button>
                <div className="modal fade" id={`id${listValue[0]}`}>
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <form className={'d-flex add-record'} onSubmit={onSubmitEdit}>
                                <label className={"d-flex align-items-center"}>
                                    {attr[1]}
                                    <input value={input1}
                                           onChange={e => setInput1(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {attr[2]}
                                    <input value={input2}
                                           onChange={e => setInput2(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {attr[3]}
                                    <input value={input3}
                                           onChange={e => setInput3(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {attr[4]}
                                    <input value={input4}
                                           onChange={e => setInput4(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {attr[5]}
                                    <input value={input5}
                                           onChange={e => setInput5(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {attr[6]}
                                    <input value={input6}
                                           onChange={e => setInput6(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <label className={"d-flex align-items-center"}>
                                    {attr[7]}
                                    <input value={input7}
                                           onChange={e => setInput7(e.target.value)}
                                           type="text" className={"form-control"}/>
                                </label>
                                <button type="submit" className="btn btn-warning mx-auto edit-btn">Редагувати
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};



export default EditTable6;