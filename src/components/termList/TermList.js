import React from "react";
import DashboardCourse from "../dashboardCourse/DashboardCourse";
import {kebabCase} from "../../functions/kebabCase";
import "./TermList.css";

export default function TermList({courses, termName}) {
    return <div className="term-list-container">
        <h2 className="term-name">{termName}</h2>
        <div className="term-list-courses">
            {courses.map(({id, courseSection, description, numLectures}) => {
                return <DashboardCourse
                    key={id}
                    courseSectionRoute={kebabCase(courseSection)}
                    courseSectionName={courseSection}
                    description={description}
                    numLectures={numLectures}
                />
            })}
        </div>
    </div>
}
