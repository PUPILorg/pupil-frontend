import React from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CourseLink from "../../courseLink/CourseLink";
import {kebabCase} from "../../../functions/kebabCase";
import AccountCard from "../../accountCard/AccountCard";
import AddCourseButton from "../../addCourseButton/AddCourseButton";
import {useSelector} from "react-redux";


export default function Sidebar({termsList}) {
    const role = useSelector(state => state.user.role);


    return (
        <nav className={"sidebar"}>
            <div className={"sidebar-content"}>
                <div className={"sidebar-top-menu"}>
                    <Link className={"dashboard-link"} to="/">pupil</Link>
                    <FontAwesomeIcon icon="bars" size="1x" className="sidebar-bars"/>
                </div>
                {termsList[0].courses.map(({id, course_identifier, section_num}) => {
                    return <CourseLink key={id}
                                       courseSectionRoute={role === "professor"
                                           ?
                                           `../${kebabCase(course_identifier + section_num)}`
                                           :
                                           kebabCase(course_identifier + section_num)}
                                       courseSectionName={course_identifier} description={"TODO"}/>
                })}
                <AddCourseButton/>
            </div>
            <AccountCard/>
        </nav>
    )
}
