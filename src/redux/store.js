import {configureStore} from '@reduxjs/toolkit'
import chooseViewReducer from "./slices/chooseViewSlice"
import {loadToken} from "../auth/localStorage";
import {logger} from "./middleware/loggerMiddleware";
import authTokenReducer from "./slices/authTokenSlice";
import {persistToken} from "./middleware/persistTokenMiddleware";
import userReducer from "./slices/userSlice";
import {termsListReducer} from "./thunks/fetchTermsList";
import authorizedReducer from "./slices/authorizedReducer";

const authToken = loadToken();

export default configureStore({
    reducer: {
        view: chooseViewReducer,
        authToken: authTokenReducer,
        user: userReducer,
        termsList: termsListReducer,
        authorized: authorizedReducer,
    },
    preloadedState: {
        authToken: authToken,
        // user: {loggedIn: true, id: null, role: 'student'}
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, persistToken),
})
