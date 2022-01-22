import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

export default function RequireAuth({ children }) {

    const authorized = useSelector(state => state.authorized)
    let location = useLocation();

    if (!authorized) {
        return <Navigate to="/login" state = {{from: location}} replace/>
    }

    return children;
};
