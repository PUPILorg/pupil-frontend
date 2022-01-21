import React from "react";
import "./Login.css";
import {useDispatch} from "react-redux";
import {login, STUDENT} from "../../redux/slices/userSlice";
import {receiveToken} from "../../redux/slices/authTokenSlice";

export default function Login(){

    const dispatch = useDispatch();

    function onClick(){
        dispatch(login({
            id: "TODO: User ID",
            role: STUDENT
        }));
        dispatch(receiveToken({token: process.env.REACT_APP_TEST_STUDENT_AUTH}));
    }

    return(
        <div className="login-screen">
            <p className="login-text">This is a temporary login screen. By clicking login, the test auth token should be
            saved locally to your computer. This token currently has no expiration, so you shouldn't need to log in again.</p>
            <button onClick={onClick} className="login-button">Log in</button>
        </div>
    )
}