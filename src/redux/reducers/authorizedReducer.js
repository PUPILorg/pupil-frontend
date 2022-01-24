import {AUTHORIZED, UNAUTHORIZED} from "../actions/authorized";

export default function reducer(state = false, action) {

    switch (action.type) {
        case AUTHORIZED:
            if (action.status < 400) {
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.status}: user is authorized.`)
                return true;
            }
            break;
        case UNAUTHORIZED:
            console.log(`${action.type} action triggered. Checking response status for authorization.`);
            console.log(`Response status ${action.status}: user is unauthorized.`)
            return false;
        case 'user/validateToken/fulfilled':
            if (action.payload.status < 400) {
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is authorized.`)
                return true;
            }
            break;
        case 'user/validateToken/rejected':
            console.log(`${action.type} action triggered. Checking response status for authorization.`);
            console.log(`Response status ${action.payload.status}: user is unauthorized.`)
            return true;
        case 'user/loginUser/fulfilled':
            if (action.payload.status < 400) {
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is authorized.`)
                return true;
            }
            break;
        case 'user/loginUser/rejected':
            if (action.payload.status >= 400) {
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is unauthorized.`)
                return false;
            }
            break;
        default:
            return state;
    }
    return state;
}
