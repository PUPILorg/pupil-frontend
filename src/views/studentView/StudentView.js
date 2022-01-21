import React from "react";
import "./StudentView.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

export default function StudentView() {

    const authToken = useSelector(state => state.authToken.token);

    useEffect(() =>{
        axios.get('https://backend.pupil.systems/API/student/courses/', {
            headers: {
                'Authorization': `token ${authToken}`
            }
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (<div>
            <Sidebar/>
            <div className={"student-view-content"}>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                </Routes>
            </div>
        </div>
    )
}
