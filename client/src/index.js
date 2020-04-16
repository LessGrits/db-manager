import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  './zero.css'
import App from './components/App';


let listSelectOneData = [
    {id:'1', type:'edit'},
    {id:'2', type:'edit'},
    {id:'3', type:'edit'},
    {id:'4', type:'edit'},
    {id:'5', type:'edit'},
    {id:'6', type:'edit'},
    {id:'7', type:'edit'},
    {id:'8', type:'edit'},
];


ReactDOM.render(
  <React.StrictMode>
    <App selectOneData={listSelectOneData} />
  </React.StrictMode>,
  document.getElementById('root')
);

