export default function reducer(state = false, action) {

    switch(action.type){
        case 'termsList/fetchTermsList/rejected':
            if(action.payload.status >= 400){
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is unauthorized.`)
                return false;
            }
            break;
        case 'termsList/fetchTermsList/fulfilled':
            if(action.payload.status <400){
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is authorized.`)
                return true;
            }
            break;
        case 'authToken/receiveToken': //TODO: change to user/receiveToken
            console.log(`${action.type} action triggered. Checking response status for authorization.`);
            console.log(`Auth token saved as part of temporary login measures. User is authorized.`)
            return true; //TODO THIS IS NOT SAFE DELETE THIS AFTER LOGIN IS IMPLEMENTED
        default:
            return state;
    }
    return state;
}