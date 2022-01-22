import React from "react";
import {Link} from "react-router-dom";
import "./ProfessorClassSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountCard from "../../accountCard/AccountCard";



export default function ProfessorClassSidebar() {

  // TODO: use the below in a custom ProfessorClassSidebarLink component to change styling on active route
  //
  // Look at the CourseLink component for reference
  //
  // let resolved = useResolvedPath(courseSectionRoute);
  // let match = useMatch({path: resolved.pathname, end: true});
  //
  //

  const className = "TODO, get from API fetch"
  return (
    <nav className={"sidebar"}>
      <div className={"sidebar-content"}>
        <div className={"sidebar-top-menu"}>
          <Link className={"dashboard-link"} to="/">
            pupil
          </Link>
          <FontAwesomeIcon icon="bars" size="1x" className="sidebar-bars" />
        </div>
        <div className="class-name-section">
          <h1 className="class">{className.toUpperCase()}</h1>
        </div>

        <div className="side-bar-menu">
          <div className="links">
            <Link className="lectures-link link" to="lectures">
              <FontAwesomeIcon icon="video" size="1x" className="icons" />
              Lectures
            </Link>
            <Link className="lectures-link link" to="roster">
              <FontAwesomeIcon
                icon="user-friends"
                size="1x"
                className="icons"
              />
              Roster
            </Link>
            <Link className="lectures-link link" to="settings">
              <FontAwesomeIcon icon="cog" size="1x" className="icons" />
              Settings
            </Link>

            <Link className="lectures-link link" to="recorder">
              <FontAwesomeIcon icon="circle" size="1x" className="icons" />
              Recorder
            </Link>
          </div>
        </div>
      </div>
      <AccountCard />
    </nav>
  );
}
