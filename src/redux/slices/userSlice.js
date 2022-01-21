import {createSlice} from "@reduxjs/toolkit";

export const PROFESSOR = 'professor';
export const STUDENT = 'student';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        id: null,
        role: null,
    },
    reducers: {
        login: (state, action) => {
            return {
                loggedIn: true,
                id: action.payload.id,
                role: action.payload.role
            }
        },
        logout: (state) => {
            state.value = {
                loggedIn: false,
                id: null,
                role: null,
            }
        }

    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
