import {saveToken} from "../../auth/localStorageAuthToken";

export const persistToken = store => next => action => {

    switch (action.type) {
        case 'user/validateToken/fulfilled':
            console.log("Saving auth token to local storage");
            saveToken(action.payload.data.token);
            break;
        case 'user/loginUser/fulfilled':
            console.log("Saving auth token to local storage");
            saveToken(action.payload.data.token);
            break;
        default:
            break;
    }

    return next(action);
};
