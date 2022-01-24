import React, {useState} from "react";
import "./StudentView.css";
import Sidebar from "../../components/sidebars/sidebar/Sidebar";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Outlet} from "react-router-dom";
import Loading from "../loading/Loading";
import axios from "axios";
import {authorized, unauthorized} from "../../redux/actions/authorized";

export default function StudentView() {

    const authToken = useSelector(state => state.user.authToken);
    const dispatch = useDispatch();

    const [termsList, setTermsList] = useState({
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

            setTermsList(prevState => ({
                ...prevState,
                'loading' : false,
                'terms': res.data
            }));
            dispatch(authorized(res.status)); // I can't figure out why, but this needs to be after the setTermsList call.
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
                    <div className={"student-view-content"}>
                        <Outlet context={[termsList, setTermsList]}/>
                    </div>
                </div>
                :
                <Loading/>
            }
        </div>
    )
}
