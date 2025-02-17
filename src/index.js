import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import "./chp04/Button.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfileCard2 from "./chp13_prac2/ProfileCard2";
import MainPage from "./chp13_prac2/MainPage";
import AirApp from "./chp13_airbnb/AirApp";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AirApp/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
