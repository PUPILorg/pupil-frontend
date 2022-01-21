import React from "react";
import "./StudentView.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchTermsList} from "../../redux/thunks/fetchTermsList";

export default function StudentView() {

    const authToken = useSelector(state => state.authToken.token);
    const {termsList, loading} = useSelector(state => state.termsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTermsList(authToken));
    }, [dispatch, authToken])

    return (<div>
            {!loading && <div>
                <Sidebar terms={termsList}/>
                <div className={"student-view-content"}>
                    <Routes>
                        <Route path="/" element={<Dashboard terms={termsList}/>}/>
                    </Routes>
                </div>
            </div>
            }
        </div>
    )
}
