import React from "react";
import "./ProfessorView.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";

export default function ProfessorView(){
    return(
        <div>
            <Sidebar/>
            <div className={"professor-view-content"}>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                </Routes>
            </div>
        </div>
    )
}
