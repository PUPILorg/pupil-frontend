import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({username, password}, {rejectWithValue}) => {
        try {
            // const backendUrl = process.env.REACT_APP_BACKEND_URL_ROOT;
            // const response = await axios.get(`${backendUrl}/validateToken`,{
            //     body: {
            //         'username': username
            //         'password': password
            //     }
            // });

            //TODO: change this
            const response = {
                status: 200,
                data: {
                    token: process.env.REACT_APP_TEST_STUDENT_AUTH
                }
            }

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
