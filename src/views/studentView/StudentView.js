import React from "react";
import "./StudentView.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";

export default function StudentView() {
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
