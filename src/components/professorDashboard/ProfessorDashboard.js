import React, {useEffect, useState} from "react";
import Sidebar from "../sidebars/sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import ProfessorCourseList from "../courseLists/ProfessorCourseList/ProfessorCourseList";
import "./ProfessorDashboard.css";
import {authorized, unauthorized} from "../../redux/actions/authorized";
import Loading from "../../views/loading/Loading";
import axios from "axios";

export default function ProfessorDashboard() {

    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.user.authToken);

    // TODO: CHANGE THIS TO PROFESSOR ENDPOINT

    const [termsList, setTerms] = useState({
        loading: true,
        terms: []
    });

    useEffect(() => {
        console.log('mounting');
        const backendUrl = process.env.REACT_APP_BACKEND_URL_ROOT;
        axios.get(`${backendUrl}/student/courses/`, {
            headers: {
                'Authorization': `token ${authToken}`
            }
        }).then((res) => {

            setTerms(prevState => ({
                ...prevState,
                'loading' : false,
                'terms': res.data
            }));
            dispatch(authorized(res.status)); // I can't figure out why, but this needs to be after the setTerms call.
        }).catch((err) => {
            if(err.response){
                dispatch(unauthorized(err.response.status));
            }
        })
    }, [authToken, dispatch]) // Don't add termsList dependency to this

    return (<div>
        {!termsList.loading ?
            <div>
                <Sidebar termsList={termsList.terms}/>
                <div className="professor-view-content">
                    <ProfessorCourseList termsList={termsList.terms}/>
                </div>
            </div>
            : <Loading/>}
    </div>)
}
