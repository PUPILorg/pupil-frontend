import {createSlice} from "@reduxjs/toolkit";

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
