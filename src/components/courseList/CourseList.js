import React from "react";
import TermList from "../termList/TermList";

import "./CourseList.css";
import {useSelector} from "react-redux";

export default function CourseList({professor}) {

    const {termsList} = useSelector(state => state.termsList);

    return (
        <div className="dashboard">
            <h1>Courses</h1>
            {termsList.map(({id, semester, courses}) => {
                return <TermList professor={professor} key={id} termName={semester} courses={courses}/>
            })}
        </div>
    )
}
