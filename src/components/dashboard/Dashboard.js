import React from "react";
import {fakeClasses} from "../sidebar/fakeClasses";
import TermList from "../termList/TermList";

import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Courses</h1>
            {fakeClasses.map(({id, name, courses}) => {
                return <TermList key={id} termName={name} courses={courses}/>
            })}
        </div>
    )
}
