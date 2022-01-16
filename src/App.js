import {Routes, Route} from "react-router-dom";
import './App.css';
import {ChooseView} from "./components/chooseView/ChooseView";
import {useSelector} from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import UnknownPage from "./views/unknownPage/UnknownPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

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
