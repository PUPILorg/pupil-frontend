import React from "react";
import DashboardCourse from "../dashboardCourse/DashboardCourse";
import "./TermList.css";

export default function TermList({courses, termName}) {
    return <div className="term-list-container">
        <h2 className="term-name">{termName}</h2>
        <div className="term-list-courses">
            {courses.map(({id, course_name:name, description, numLectures}) => {
                return <DashboardCourse
                    key={id}
                    courseSectionRoute={`${id}`}
                    courseName={name}
                    description={"TODO: description"}
                    numLectures={"TODO: numLectures"}
                />
            })}
        </div>
    </div>
}
