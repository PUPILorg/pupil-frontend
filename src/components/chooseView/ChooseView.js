import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {viewAsStudent, viewAsProfessor, PROFESSOR_VIEW, STUDENT_VIEW} from "./chooseViewSlice";
import "./ChooseView.css";

export function ChooseView() {
    const view = useSelector((state) => state.view.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={"choose-view-container"}>
                <button
                    onClick={() => dispatch(viewAsProfessor())}
                    className={`choose-view-button${(view === PROFESSOR_VIEW) ? " active": ""}`}
                >Professor view
                </button>
                <button
                    onClick={() => dispatch(viewAsStudent())}
                    className={`choose-view-button${(view === STUDENT_VIEW) ? " active" : ""}`}
                >Student view
                </button>
            </div>
        </div>
    )
}
