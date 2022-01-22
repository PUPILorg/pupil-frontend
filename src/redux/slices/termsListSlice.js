import {createSlice} from "@reduxjs/toolkit";
import {fetchTermsList} from "../thunks/fetchTermsList";

const termsListSlice = createSlice({
    name: 'termsList',
    initialState: {
        termsList: [],
        loading: true, //TODO: change this
        statusCode: null
    },
    reducers: {},
    extraReducers: {
        [fetchTermsList.pending]: (state) => {
            state.loading = true;
        },
        [fetchTermsList.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.termsList = payload.data
            state.statusCode = payload.status
        },
        [fetchTermsList.rejected]: (state, {payload}) => {
            state.loading = false
            state.statusCode = payload.status
        },
    },
});

export const termsListReducer = termsListSlice.reducer
