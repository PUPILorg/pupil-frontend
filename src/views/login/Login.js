import React, {useEffect} from "react";
import "./Login.css";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/thunks/loginUser";
import {loadToken} from "../../auth/localStorageAuthToken";
import {validateToken} from "../../redux/thunks/validateToken";
import {Navigate, useLocation} from "react-router-dom";
import Loading from "../loading/Loading";

export default function Login() {

    const dispatch = useDispatch();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const authorized = useSelector((state) => state.authorized);

    useEffect(() => {
            console.log("LOGIN MOUNTED: GETTING AUTH TOKEN FROM LOCAL STORAGE");
            const authToken = loadToken(); // Try to load in an auth token from local storage
            dispatch(validateToken(authToken))
        }, [dispatch]
    )

    const loading = useSelector(state => state.user.loading);

    function onClick() {
        dispatch(loginUser({username: "grant", password: "password"}))
    }

    return (<div>
            {loading ? <Loading/> : <div>
                {
                    authorized ? <Navigate to={from} replace/> : <div className="login-screen">
                        <p className="login-text">This is a temporary login screen. By clicking login, the test auth
                            token should be saved locally to your computer. After you have the token saved to your
                            computer, this screen shouldn't show anymore.</p>
                        <button onClick={onClick} className="login-button">Log in</button>
                    </div>
                }
            </div>
            }
        < /div>
    )
}
