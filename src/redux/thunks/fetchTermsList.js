import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTermsList = createAsyncThunk(
    'termsList/fetchTermsList',
    async (authToken, thunkAPI) => {
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL_ROOT;
            const response = await axios.get(`${backendUrl}/student/courses/`, {
                headers: {
                    'Authorization': `token ${authToken}`
                }
            });
            return response.data
        } catch (err) {
            console.log(err);
        }
    }
)

const termsListSlice = createSlice({
    name: 'termsList',
    initialState: {
        termsList: [],
        loading: true
    },
    reducers: {},
    extraReducers: {
        [fetchTermsList.pending]: (state) => {
            state.loading = true
        },
        [fetchTermsList.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.termsList = payload
        },
        [fetchTermsList.rejected]: (state) => {
            state.loading = false
        },
    },
});

export const termsListReducer = termsListSlice.reducer
