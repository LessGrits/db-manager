import React, {useEffect, useState} from "react";
import './Make-query1.css'


const firstName = 'age';
const secondName = 'status';
const db = 'members';
const url = 'http://localhost:5000/query1';

const MakeQuery1 = () => {

    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const [records, setRecords] = useState();

    let firstList = [];
    let secoundList = [];

    const getAttr = async () => {
        try {
            const url = `http://localhost:5000/get-categories/${firstName}/${secondName}/${db}`;
            const response = await fetch(url);
            const jsonDate = await response.json();
            console.log(Object.keys(jsonDate[0][0]));
            setLists(jsonDate[0])
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAttr();
    }, []);

    const setLists = (list) => {
        list.forEach(({age, status}) => {
            firstList.push(age);
            secoundList.push(status);
        });
        firstList = unique(firstList);
        secoundList = unique(secoundList);
        setFirst(firstList);
        setSecond(secoundList);
    };

    function unique(arr) {
        return Array.from(new Set(arr));
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        const response = await fetch(`${url}/${value1}/${value2}`);

        const jsonDate = await response.json();
        console.log(jsonDate[0]);
        setRecords(jsonDate[0]);
        try {

        } catch (err) {
            console.error(err.message);
        }
    };

    let i = 1;
    const writeAtr = () => {
        if (!records[0]) return;


        return Object.keys(records[0]).map(el => {
            if (el === 'id') return (<th scope="col">#</th>);

            return <td>{el}</td>
        })
    };

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <h2>Запит №1</h2>
                <div className="select-row">
                    <label>Вік
                        <select value={value1} onChange={e => setValue1(e.target.value)} className="custom-select">
                            <option  value='0'>вибрати</option>
                            {first.map((el) => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                    </label>

                    <label>Статус
                        <select value={value2} onChange={e => setValue2(e.target.value)} className="custom-select">
                            <option  value='0'>вибрати</option>
                            {second.map((el) => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <button type="submit" className="btn btn-success btn-make-query btn-lg" data-toggle="modal"
                        data-target="#myModal">Зробити запит
                </button>
            </form>
            <table className="table ">
                <thead className="thead-light">
                <tr>
                    {
                        records ? writeAtr() : ''
                    }
                </tr>
                </thead>
                <tbody>
                {records ? (
                    records.map((obj) => {
                        return (<tr key={obj.id}>
                            <td>{i++}</td>
                            {Object.keys(obj).map((atr) => {
                                if (atr === 'id') return;
                                return (
                                    <td>{obj[atr]}</td>
                                )
                            })}
                        </tr>)
                    })) : ''
                }
                </tbody>
            </table>
        </>
    )
};

export default MakeQuery1;