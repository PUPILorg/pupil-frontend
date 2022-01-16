import React from "react";
import {fakeClasses} from "../sidebar/fakeClasses";
import {kebabCase} from "../../functions/kebabCase";
import DashboardCourse from "../dashboardCourse/DashboardCourse";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Courses</h1>
            <h2 className="dashboard-semester-name">TODO: Semester name</h2>
            <div className="dashboard-course-list">
                {fakeClasses.map(({id, courseSection, description}) => {
                    return <DashboardCourse
                        key={id}
                        courseSectionRoute={kebabCase(courseSection)}
                        courseSectionName={courseSection}
                        description={description}
                        numUnpublished={"TODO"}
                        numLectures={"TODO"}
                    />
                })}
            </div>
        </div>
    )
}
