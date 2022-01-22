export default function reducer(state = false, action) {

    switch(action.type){
        case 'termsList/fetchTermsList/fulfilled':
            if(action.payload.status <400){
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is authorized.`)
                return true;
            }
            break;
        case 'user/validateToken/fulfilled':
            if(action.payload.status <400){
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is authorized.`)
                return true;
            }
            break;
        case 'user/loginUser/fulfilled':
            if(action.payload.status <400){
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is authorized.`)
                return true;
            }
            break;
        case 'termsList/fetchTermsList/rejected':
            if(action.payload.status >= 400){
                console.log(`${action.type} action triggered. Checking response status for authorization.`);
                console.log(`Response status ${action.payload.status}: user is unauthorized.`)
                return false;
            }
            break;
        case 'user/loginUser/rejected':
            if(action.payload.status >= 400){
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
