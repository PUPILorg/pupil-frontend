import {Routes, Route} from "react-router-dom";
import './App.css';
import {ChooseView} from "./components/chooseView/ChooseView";
import {useSelector} from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faUserCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faUserCircle, faPlusCircle)

function App() {
    const view = useSelector((state) => state.view.value);

    return (
        <div className="App">
            <ChooseView/>
            <Sidebar />
            <Routes>
            </Routes>
        </div>
    );
}

export default App;
