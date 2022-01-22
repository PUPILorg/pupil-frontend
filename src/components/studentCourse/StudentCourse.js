import React from "react";
import {useParams} from "react-router-dom";

export default function StudentCourse(){
    const params = useParams()
    return (
        <div>
            <h1>STUDENT COURSE PAGE:</h1>
            <h2>Course ID: {params.courseID}</h2>
        </div>
    )
}
