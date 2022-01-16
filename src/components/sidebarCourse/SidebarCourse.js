import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./SidebarCourse.css";

export default function SidebarCourse({courseSectionRoute, courseSectionName, description}) {

    let resolved = useResolvedPath(courseSectionRoute);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <div className="sidebar-course">
            <Link
                className={`sidebar-course-link${(match ? " sidebar-course-active" : "")}`}
                to={`/${courseSectionRoute}`}>{courseSectionName}</Link>
            <p className={`sidebar-course-description${(match ? " sidebar-course-active" : "")}`}>{description}</p>
        </div>
    )
}
