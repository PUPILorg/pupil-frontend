import {saveToken} from "../../auth/localStorage";

export const persistToken = store => next => action => {

    switch (action.type) {

        case 'authToken/receiveToken':
            console.log("Saving token to local storage");
            saveToken(action.payload);
            break;
        default:
            break;
    }

    return next(action);
};
