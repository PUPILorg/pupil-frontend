import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const validateToken = createAsyncThunk(
    'user/validateToken',
    async (authToken, {rejectWithValue}) => {
        try {
            // const backendUrl = process.env.REACT_APP_BACKEND_URL_ROOT;
            // const response = await axios.get(`${backendUrl}/validateToken`,{
            //     headers: {
            //         'Authorization': `token ${authToken}`
            //     }
            // });

            //TODO: change this
            const response = {
                status: 400,
                data: {
                    token: authToken // change authToken to be the new token after it is refreshed
                }
            }

            console.log("Refresh token if necessary");

            return {
                status: response.status,
                data: response.data
            }
        } catch (err) {
            return rejectWithValue({
                status: 401
                // status: err.response.status
            });
        }
    })
