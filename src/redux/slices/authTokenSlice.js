import {createSlice} from "@reduxjs/toolkit";

// TODO: Create async thunk to fetch token from API (user login) and store it in the state. Then in middleware,
// TODO: save this token to local storage.

const authTokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        token: null
    },
    reducers: {
        receiveToken: (state, action) => {
            state.token = action.payload.token
        },
    }
});

export const {receiveToken} = authTokenSlice.actions;
//The above creates action type 'receiveToken/receiveToken'

export default authTokenSlice.reducer;
