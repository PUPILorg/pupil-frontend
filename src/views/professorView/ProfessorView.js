import React, {useEffect} from "react";
import "./ProfessorView.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchTermsList} from "../../redux/thunks/fetchTermsList";

export default function ProfessorView() {

    const authToken = useSelector(state => state.authToken.token);
    const {termsList, loading, statusCode} = useSelector(state => state.termsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTermsList(authToken));
    }, [dispatch, authToken])

    const dataReady = !loading && statusCode < 400;

    return (
        <div>
            {dataReady && <div>
                <Sidebar terms={termsList}/>
                <div className={"professor-view-content"}>
                    <Routes>
                        <Route path="/" element={<Dashboard terms={termsList}/>}/>
                    </Routes>
                </div>
            </div>}
        </div>
    )
}
