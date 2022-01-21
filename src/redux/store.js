import {configureStore} from '@reduxjs/toolkit'
import chooseViewReducer from "./slices/chooseViewSlice"
import {loadToken} from "../auth/localStorage";
import {logger} from "./middleware/loggerMiddleware";
import authTokenReducer from "./slices/authTokenSlice";
import {persistToken} from "./middleware/persistTokenMiddleware";
import userReducer from "./slices/userSlice";

const authToken = loadToken();

export default configureStore({
    reducer: {
        view: chooseViewReducer,
        authToken: authTokenReducer,
        user: userReducer,
    },
    preloadedState: {
        authToken: authToken,
        user: {loggedIn: true, id: null, role: 'student'}
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, persistToken),
})
