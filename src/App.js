import './App.css';
import {ChooseView} from "./components/chooseView/ChooseView";
import {useSelector} from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faUserCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {PROFESSOR_VIEW} from "./redux/slices/chooseViewSlice";
import ProfessorView from "./views/professorView/ProfessorView";
import StudentView from "./views/studentView/StudentView";
import Login from "./views/login/Login";


library.add(faBars, faUserCircle, faPlusCircle);

function App() {

    const view = useSelector((state) => state.view.value);
    const authorized = useSelector((state) => state.authorized);

    return (
        <div className="App">
            {!authorized ? <Login/> : (view === PROFESSOR_VIEW) ? <ProfessorView /> : <StudentView />}
            {!authorized && <ChooseView/>}
        </div>
    );
}

export default App;
