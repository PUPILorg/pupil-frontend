import './App.css';
import {ChooseView} from "./components/chooseView/ChooseView";
import {useSelector} from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faUserCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {PROFESSOR_VIEW} from "./components/chooseView/chooseViewSlice";
import ProfessorView from "./views/professorView/ProfessorView";
import StudentView from "./views/studentView/StudentView";

library.add(faBars, faUserCircle, faPlusCircle);

function App() {
    const view = useSelector((state) => state.view.value);

    return (
        <div className="App">
            <ChooseView/>
            {(view === PROFESSOR_VIEW) ? <ProfessorView /> : <StudentView />}
        </div>
    );
}

export default App;
