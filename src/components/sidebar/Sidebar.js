import React from "react";
import {fakeClasses} from "./fakeClasses";
import {Link} from "react-router-dom";
import "./Sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CourseLink from "../courseLink/CourseLink";
import {kebabCase} from "../../functions/kebabCase";
import AccountCard from "../accountCard/AccountCard";
import AddCourseButton from "../addCourseButton/AddCourseButton";

export default function Sidebar() {
    return (
        <nav className={"sidebar"}>
            <div className={"sidebar-content"}>
                <div className={"sidebar-top-menu"}>
                    <Link className={"dashboard-link"} to="/">pupil</Link>
                    <FontAwesomeIcon icon="bars" size="1x" className="sidebar-bars"/>
                </div>
                {fakeClasses[0] && fakeClasses[0].courses.map(({id, courseSection, description}) => {
                    return <CourseLink key={id} courseSectionRoute={kebabCase(courseSection)}
                                       courseSectionName={courseSection} description={description}/>
                })}
                <AddCourseButton/>
            </div>
            <AccountCard/>
        </nav>
    )
}
