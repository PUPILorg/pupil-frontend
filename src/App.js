import {Routes, Route} from "react-router-dom";
import './App.css';
import {ChooseView} from "./components/chooseView/ChooseView";
import {useSelector} from "react-redux";
import {PROFESSOR_VIEW} from "./components/chooseView/chooseViewSlice";

function App() {
    const view = useSelector((state) => state.view.value);

    return (
        <div className="App">
            <ChooseView/>
            <h1>{(view === PROFESSOR_VIEW) ? "Viewing as professor" : "Viewing as student"}</h1>
            <Routes>
            </Routes>
        </div>
    );
}

export default App;
