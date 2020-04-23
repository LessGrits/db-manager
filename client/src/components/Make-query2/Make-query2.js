import React, {useEffect, useState} from "react";
import '../Make-query1/Make-query1.css'


const firstName = 'num_members';
const secondName = 'activity_level';
const db = 'committee';
const url = 'http://localhost:5000/query2';

const MakeQuery2 = () => {

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
            console.log(jsonDate);
            setLists(jsonDate[0])
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAttr();
    }, []);

    const setLists = (list) => {
        list.forEach((obj) => {
            firstList.push(obj[firstName]);
            secoundList.push(obj[secondName]);
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
                <h2>Запит №2</h2>
                <div className="select-row">
                    <label>Кл. учасників
                        <select value={value1} onChange={e => setValue1(e.target.value)} className="custom-select">
                            <option  value='0'>Вибрати</option>
                            {first.map((el) => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                    </label>

                    <label>Рівень активності
                        <select value={value2} onChange={e => setValue2(e.target.value)} className="custom-select">
                            <option  value='0'>Вибрати</option>
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
                                if(atr ==='img') return (<td><img className={'img'} src={require(`../App/img/commetties/${obj[atr]}`)}  alt=""/></td>);
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

export default MakeQuery2;