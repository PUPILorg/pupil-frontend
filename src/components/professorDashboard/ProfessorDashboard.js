import React, { useEffect } from "react";
import Sidebar from "../sidebars/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import CourseList from "../courseList/CourseList";
import "./ProfessorDashboard.css";
import { fetchTermsList } from "../../redux/thunks/fetchTermsList";
import Loading from "../../views/loading/Loading";

export default function ProfessorDashboard() {
  const { termsList, loading } = useSelector((state) => state.termsList);
  const dispatch = useDispatch();

  const authToken = useSelector((state) => state.user.authToken);

  useEffect(() => {
    dispatch(fetchTermsList(authToken));
  }, [dispatch, authToken]);

  return (
    <div>
      {!loading ? (
        <div>
          <Sidebar professor terms={termsList} />
          <div className="professor-view-content">
            <CourseList professor />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
