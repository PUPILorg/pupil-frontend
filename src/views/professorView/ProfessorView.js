import React, { useEffect } from "react";
import "./ProfessorView.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTermsList } from "../../redux/thunks/fetchTermsList";
import ProfessorClassSideBar from "../../components/professorClassSidebar/ProfessorClassSidebar";

export default function ProfessorView() {
  const authToken = useSelector((state) => state.user.authToken);
  const { termsList, loading, statusCode } = useSelector(
    (state) => state.termsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTermsList(authToken));
  }, [dispatch, authToken]);

  const dataReady = !loading && statusCode < 400;
  const path = useLocation().pathname;
  return (
    <div>
      {dataReady && (
        <div>
          { path === "/" && < Sidebar terms={termsList} /> }
         { path != "/" && <ProfessorClassSideBar /> }
          <div className={"professor-view-content"}>
            <Routes>
              <Route path="/" element={<Dashboard terms={termsList} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}
