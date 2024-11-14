import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import "./chp04/Button.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from "./chp04/Button";
import ConfirmDialog from "./chp04/ConfirmDialog";
import CommentList from './chp05/CommentList'
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate"
import ConfirmButton3 from "./chp08/ConfirmButton3"
// import Greeting from "./chp09/Greeting"
import LoginControl from "./chp09/LoginControl";
import Greeting from "./test/Greeting"
import MailBox from "./chp09/MailBox";
import LoginControl2 from "./chp09/LoginControl2";
import LandingPage from "./chp09/LandingPage";
import AppNumberList from "./chp10/AppNumberList";
import StudentAttendance from "./chp10/StudentAttendance";
import AppStudentAttendance from "./chp10/AppStudentAttendance";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppStudentAttendance/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
