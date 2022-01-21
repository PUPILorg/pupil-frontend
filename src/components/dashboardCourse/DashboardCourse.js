import React from "react";
import "./DashboardCourse.css";
import {Link} from "react-router-dom";

export default function DashboardCourse(
    {
        courseSectionRoute,
        courseName,
        description,
        numLectures
    }) {

    return (
        <Link to={`/${courseSectionRoute}`} className="dashboard-course-link">
            <div>
                <div className="dashboard-course-name-container">
                    <p className="dashboard-course-name">{courseName}</p>
                    <p className="dashboard-course-description">{description}</p>
                </div>
                <div className="dashboard-course-info-container">
                    <p className="dashboard-course-info">
                        {`Lectures: ${numLectures}`}
                    </p>
                </div>
            </div>
        </Link>
    )
}
