import { createAsyncThunk} from "@reduxjs/toolkit";
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
