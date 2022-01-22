import React from "react";
import "./Login.css";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/thunks/loginUser";

export default function Login() {

    const dispatch = useDispatch();

    function onClick() {
        dispatch(loginUser({username: "grant", password: "password"}))
    }

    return (
        <div className="login-screen">
            <p className="login-text">This is a temporary login screen. By clicking login, the test auth token should be
                saved locally to your computer. After you have the token saved to your computer, this screen shouldn't
            show anymore.</p>
            <button onClick={onClick} className="login-button">Log in</button>
        </div>
    )
}
