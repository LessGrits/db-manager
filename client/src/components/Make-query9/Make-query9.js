import React, {useEffect, useState} from "react";
import '../Make-query1/Make-query1.css'

const firstName = 'num_orginizers';
const secondName = 'date';
const thirdName = 'topic';
const db = 'events';
const url = 'http://localhost:5000/query9';

const MakeQuery9 = () => {

    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [third, setThird] = useState([]);
    const [value1, setValue1] = useState('0');
    const [value2, setValue2] = useState('0');
    const [value3, setValue3] = useState('0');

    const [records, setRecords] = useState();

    let firstList = [];
    let secoundList = [];
    let thirdList = [];

    const getAttr = async () => {
        try {
            const url = `http://localhost:5000/get-categories/${firstName}/${secondName}/${thirdName}/${db}`;
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
            thirdList.push(obj[thirdName]);
        });
        firstList = unique(firstList);
        secoundList = unique(secoundList);
        thirdList = unique(thirdList);
        setFirst(firstList);
        setSecond(secoundList);
        setThird(thirdList);
    };

    function unique(arr) {
        return Array.from(new Set(arr));
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        const response = await fetch(`${url}/${value1}/${value2}/${value3}`);

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


            return <td>{el}</td>
        })
    };

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <h2>Запит №9</h2>
                <div className="select-row">
                    <label>Кл. організаторів
                        <select value={value1} onChange={e => setValue1(e.target.value)} className="custom-select">
                            <option  value='0'>Вибрати</option>
                            {first.map((el) => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                    </label>

                    <label>Дата
                        <select value={value2} onChange={e => setValue2(e.target.value)} className="custom-select">
                            <option  value='0'>Вибрати</option>
                            {second.map((el) => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                    </label>

                    <label>Тематика
                        <select value={value3} onChange={e => setValue3(e.target.value)} className="custom-select">
                            <option  value='0'>Вибрати</option>
                            {third.map((el) => (
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
                    <th scope="col">#</th>
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
                                if(atr ==='img') return (<td><img className={'img'} src={require(`../App/img/events/${obj[atr]}`)}  alt=""/></td>);
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

export default MakeQuery9;