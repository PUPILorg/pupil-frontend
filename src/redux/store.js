import {configureStore} from '@reduxjs/toolkit'
import {logger} from "./middleware/loggerMiddleware";
import {persistToken} from "./middleware/persistTokenMiddleware";
import {userReducer} from "./slices/userSlice";
import {termsListReducer} from "./slices/termsListSlice";
import authorizedReducer from "./reducers/authorizedReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        termsList: termsListReducer,
        authorized: authorizedReducer,
    },
    preloadedState: {
        user:{
            authToken: null,
            id: null,
            role: 'student',
            loading: true
        },
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, persistToken),
})
