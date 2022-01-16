import React from "react";
import CourseLink from "../courseLink/CourseLink";
import {useSelector} from "react-redux";
import {PROFESSOR_VIEW} from "../chooseView/chooseViewSlice";
import "./DashboardCourse.css";

export default function DashboardCourse(
    {
        courseSectionRoute,
        courseSectionName,
        description,
        numUnpublished,
        numLectures
    }) {

    const view = useSelector((state) => state.view.value);

    return (
        <div className="dashboard-course">
            <div className="dashboard-course-link-container">
                <CourseLink
                    courseSectionRoute={courseSectionRoute}
                    courseSectionName={courseSectionName}
                    description={description}
                />
            </div>
            <div className="dashboard-course-info-container">
                <p className="dashboard-course-info">{
                    view === PROFESSOR_VIEW ?
                        `Unpublished: ${numUnpublished}` :
                        `Lectures: ${numLectures}`
                }
                </p>
            </div>
        </div>
    )
}
