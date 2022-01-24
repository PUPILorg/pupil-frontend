import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faUserCircle,
    faPlusCircle,
    faVideo,
    faUserFriends,
    faCog,
    faCircle
} from '@fortawesome/free-solid-svg-icons';
import StudentView from "./views/studentView/StudentView";
import Login from "./views/login/Login";
import {Routes, Route} from "react-router-dom";
import Redirect from "./views/redirect/Redirect";
import RequireAuth from "./auth/RequireAuth";
import StudentCourse from "./components/studentCourse/StudentCourse";
import ProfessorView from "./views/professorView/ProfessorView";
import ProfessorCourse from "./components/professorCourse/ProfessorCourse";
import ProfessorDashboard from "./components/professorDashboard/ProfessorDashboard";
import ProfessorLecturesList from "./components/professorLecturesList/ProfessorLecturesList";
import StudentCourseList from "./components/courseLists/StudentCourseList/StudentCourseList";


library.add(faBars, faUserCircle, faPlusCircle, faVideo, faUserFriends, faCog, faCircle);

function App() {
    return (
        <Routes>
            <Route path="/" element={<Redirect/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/student" element={<RequireAuth><StudentView/></RequireAuth>}>
                <Route path="dashboard" element={<StudentCourseList />} />
                <Route path=":courseID" element={<StudentCourse />}/>
            </Route>
            <Route path="/professor" element={<RequireAuth><ProfessorView/></RequireAuth>}>
                <Route path="dashboard" element={<ProfessorDashboard />} />
                <Route path=":courseID" element={<ProfessorCourse/>}>
                    <Route path="lectures" element={<ProfessorLecturesList />}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
