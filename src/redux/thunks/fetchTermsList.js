import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTermsList = createAsyncThunk(
    'termsList/fetchTermsList',
    async (authToken, {rejectWithValue }) => {
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL_ROOT;
            const response = await axios.get(`${backendUrl}/student/courses/`, {
                headers: {
                    'Authorization': `token ${authToken}`
                }
            });
            return {
                status: response.status,
                data: response.data
            }
        } catch (err) {
            return rejectWithValue({
                status: err.response.status
            });
        }
    }
)

const termsListSlice = createSlice({
    name: 'termsList',
    initialState: {
        termsList: [],
        loading: true,
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
