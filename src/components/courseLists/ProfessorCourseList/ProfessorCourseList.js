import React from "react";
import TermList from "../../termList/TermList";

import "../courseList.css";

export default function ProfessorCourseList({termsList}) {

    return (
        <div className="dashboard">
            <h1>Courses</h1>
            {termsList.map(({id, semester, courses}) => {
                return <TermList key={id} termName={semester} courses={courses}/>
            })}
        </div>
    )
}
