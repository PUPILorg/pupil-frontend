import React from "react";
import "./StudentView.css";
import Sidebar from "../../components/sidebars/sidebar/Sidebar";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchTermsList} from "../../redux/thunks/fetchTermsList";
import {Outlet} from "react-router-dom";
import Loading from "../loading/Loading";

export default function StudentView() {

    const authToken = useSelector(state => state.user.authToken);
    const {termsList, loading} = useSelector(state => state.termsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTermsList(authToken));
    }, [dispatch, authToken])

    return (<div>
            {!loading ?
                <div>
                    <Sidebar terms={termsList}/>
                    <div className={"student-view-content"}>
                        <Outlet/>
                    </div>
                </div>
                :
                <Loading/>
            }
        </div>
    )
}
