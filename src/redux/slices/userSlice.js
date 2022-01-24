import {createSlice} from "@reduxjs/toolkit";
import {validateToken} from "../thunks/validateToken";
import {loginUser} from "../thunks/loginUser";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        authToken: null,
        id: null,
        role: null,
        loading: true,
        statusCode: null
    },
    reducers: {},
    extraReducers: {
        [validateToken.pending]: (state) => {
            state.loading = true;
        },
        [validateToken.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.authToken = payload.data.token;
            state.statusCode = payload.status;
        },
        [validateToken.rejected]: (state, {payload}) => {
            state.loading = false;
            state.statusCode = payload.status;
        },
        [loginUser.pending]: (state) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.authToken = payload.data.token;
            state.statusCode = payload.status;
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.loading = false;
            state.statusCode = payload.status;
        },
    }
})


export const userReducer = userSlice.reducer;
