import {configureStore} from '@reduxjs/toolkit'
import {logger} from "./middleware/loggerMiddleware";
import {persistToken} from "./middleware/persistTokenMiddleware";
import {userReducer} from "./slices/userSlice";
import authorizedReducer from "./reducers/authorizedReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        authorized: authorizedReducer,
    },
    preloadedState: {
        user:{
            authToken: null,
            id: null,
            role: 'professor',
            loading: true
        },
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, persistToken),
})
