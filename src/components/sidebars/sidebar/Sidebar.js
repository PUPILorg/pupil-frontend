import React from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CourseLink from "../../courseLink/CourseLink";
import AccountCard from "../../accountCard/AccountCard";
import AddCourseButton from "../../addCourseButton/AddCourseButton";
import {useSelector} from "react-redux";


export default function Sidebar({termsList}) {
    const role = useSelector(state => state.user.role);
    console.log(termsList);

    return (
        <nav className={"sidebar"}>
            <div className={"sidebar-content"}>
                <div className={"sidebar-top-menu"}>
                    <Link className={"dashboard-link"} to="/">pupil</Link>
                    <FontAwesomeIcon icon="bars" size="1x" className="sidebar-bars"/>
                </div>
                {termsList[0].courses.map(({id, course_name, section_num}) => {
                    return <CourseLink key={id}
                                       courseSectionRoute={role === "professor" ? `../${id}/lectures` : `${id}`}
                                       courseSectionName={course_name} description={"TODO"}/>
                })}
                <AddCourseButton/>
            </div>
            <AccountCard/>
        </nav>
    )
}
