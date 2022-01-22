import React from "react";
import {Outlet, useParams} from "react-router-dom";
import "./ProfessorCourse.css"
import ProfessorClassSidebar from "../sidebars/professorClassSidebar/ProfessorClassSidebar";

export default function ProfessorCourse(){

    // DO SOME API CALL HERE TO POPULATE THE STATE, THEN RENDER THE PAGE USING
    // THAT STATE

    const params = useParams()
    return (
        <div>
            <ProfessorClassSidebar />
            <div className="professor-view-content">
                <Outlet />
            </div>
        </div>
    )
}
