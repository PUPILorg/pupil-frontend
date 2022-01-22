import './App.css';
import {ChooseView} from "./components/chooseView/ChooseView";
import {useDispatch, useSelector} from "react-redux";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faUserCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {PROFESSOR_VIEW} from "./redux/slices/chooseViewSlice";
import ProfessorView from "./views/professorView/ProfessorView";
import StudentView from "./views/studentView/StudentView";
import Login from "./views/login/Login";
import {useEffect} from "react";
import {validateToken} from "./redux/thunks/validateToken";
import {loadToken} from "./auth/localStorageAuthToken";


library.add(faBars, faUserCircle, faPlusCircle);

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
            console.log("APP MOUNTED: GETTING AUTH TOKEN FROM LOCAL STORAGE");
            const authToken = loadToken(); // Try to load in an auth token from local storage
            dispatch(validateToken(authToken))
        }, []
    )

    const view = useSelector((state) => state.view.value);
    const authorized = useSelector((state) => state.authorized);

    return (
        <div className="App">
            {!authorized ? <Login/> : (view === PROFESSOR_VIEW) ? <ProfessorView/> : <StudentView/>}
            {authorized && <ChooseView/>}
        </div>
    );
}

export default App;
