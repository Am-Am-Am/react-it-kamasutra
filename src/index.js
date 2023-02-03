import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
// let postsData = [{message: 'где нас нет?', id: '0',likesCount: 0}, {message: 'я мечтаю!', id: '1',likesCount: 0}]
// let dataDialogs = [{name: 'Oxxxymiron', id: '0'}, {name: 'KPss', id: '1'}]
// let messagesData = [{message: 'где нас нет', id: '0'}, {message: 'я мечтаю', id: '1'}]

root.render(
  <React.StrictMode>
    <App state = {state}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
