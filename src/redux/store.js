import {configureStore} from '@reduxjs/toolkit'
import chooseViewReducer from "./slices/chooseViewSlice"
import {logger} from "./middleware/loggerMiddleware";
import {persistToken} from "./middleware/persistTokenMiddleware";
import {userReducer} from "./slices/userSlice";
import {termsListReducer} from "./slices/termsListSlice";
import authorizedReducer from "./reducers/authorizedReducer";

// const authToken = loadToken(); // Try to load in an auth token from local storage

export default configureStore({
    reducer: {
        view: chooseViewReducer,
        user: userReducer,
        termsList: termsListReducer,
        authorized: authorizedReducer,
    },
    preloadedState: {
        user:{
            authToken: null,
            id: null,
            role: null,
        },
        // user: {loggedIn: true, id: null, role: 'student'}
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, persistToken),
})
