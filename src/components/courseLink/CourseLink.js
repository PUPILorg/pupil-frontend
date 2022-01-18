import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./CourseLink.css";

export default function CourseLink({courseSectionRoute, courseSectionName, description}) {

    let resolved = useResolvedPath(courseSectionRoute);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <div className="sidebar-course-content">
            <Link className={`sidebar-course-link${(match ? " sidebar-course-active" : "")}`}
                  to={`/${courseSectionRoute}`}>
                <p className="sidebar-course-name">{courseSectionName}</p>
                <p className={`sidebar-course-description${(match ? " sidebar-course-active" : "")}`}>{description}</p>
            </Link>
        </div>
    )
}
