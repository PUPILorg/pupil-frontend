import React from "react";
import TermList from "../../termList/TermList";

import "../courseList.css";
import {useOutletContext} from "react-router-dom";

export default function StudentCourseList() {

    const [termsList, setTermsList] = useOutletContext();

    return (
        <div className="dashboard">
            <h1>Courses</h1>
            {termsList.terms.map(({id, semester, courses}) => {
                return <TermList key={id} termName={semester} courses={courses}/>
            })}
        </div>
    )
}
