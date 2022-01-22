import React from "react";
import DashboardCourse from "../dashboardCourse/DashboardCourse";
import {kebabCase} from "../../functions/kebabCase";
import "./TermList.css";

export default function TermList({courses, termName, professor}) {
    return <div className="term-list-container">
        <h2 className="term-name">{termName}</h2>
        <div className="term-list-courses">
            {courses.map(({id, section_num:courseSection, course_identifier:name, description, numLectures}) => {
                return <DashboardCourse
                    professor={professor}
                    key={id}
                    courseSectionRoute={kebabCase(name + courseSection)}
                    courseName={name}
                    description={"TODO: description"}
                    numLectures={"TODO: numLectures"}
                />
            })}
        </div>
    </div>
}
