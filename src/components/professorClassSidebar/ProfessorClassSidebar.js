import React from "react";
import {
  Link,
  resolvePath,
  Route,
  Routes,
  useLocation,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import "./ProfessorClassSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseLink from "../courseLink/CourseLink";
import { kebabCase } from "../../functions/kebabCase";
import AccountCard from "../accountCard/AccountCard";

export default function ProfessorClassSideBar() {
  const route = useLocation().pathname;
  const className = route.split("/")[1];
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
            <Link className="lectures-link link" to={`${className}/lectures`}>
              <FontAwesomeIcon icon="video" size="1x" className="icons" />
              Lectures
            </Link>
            <Link className="lectures-link link" to={`${className}/roster`}>
              <FontAwesomeIcon
                icon="user-friends"
                size="1x"
                className="icons"
              />
              Roster
            </Link>
            <Link className="lectures-link link" to={`${className}/settings`}>
              <FontAwesomeIcon icon="cog" size="1x" className="icons" />
              Settings
            </Link>

            <Link className="lectures-link link" to={`${className}/recorder`}>
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
