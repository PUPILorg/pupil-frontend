import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Redirect() {
    const userRole = useSelector(state => state.user.role)

    if (userRole === 'student') {
        return <Navigate to="/student/dashboard" />;
    } else if (userRole === 'professor') {
        return <Navigate to="/professor/dashboard" />;
    }
}
