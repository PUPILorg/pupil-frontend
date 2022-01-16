import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./AddCourseButton.css";

export default function AddCourseButton() {

    return (
        <div className="add-course-button-container">
            <div className="add-course-button-content"
            onClick={()=>{
                alert("TODO")
            }}
            >
                <FontAwesomeIcon icon="plus-circle" size="2x" className="add-course-plus-icon"/>
                <p className="add-course-button-text">Add course</p>
            </div>
        </div>
    )
}
