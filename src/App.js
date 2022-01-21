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

    const user = useSelector((state) => state.user);
    const view = useSelector((state) => state.view.value);

    return (
        <div className="App">
            {!user.loggedIn ? <Login/> : (view === PROFESSOR_VIEW) ? <ProfessorView /> : <StudentView />}
            {user.loggedIn && <ChooseView/>}
        </div>
    );
}

export default App;
