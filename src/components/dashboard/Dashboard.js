import React from "react";
import TermList from "../termList/TermList";

import "./Dashboard.css";

export default function Dashboard({terms}) {
    return (
        <div className="dashboard">
            <h1>Courses</h1>
            {terms.map(({id, semester, courses}) => {
                return <TermList key={id} termName={semester} courses={courses}/>
            })}
        </div>
    )
}
