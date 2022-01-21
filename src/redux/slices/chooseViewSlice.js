import {createSlice} from "@reduxjs/toolkit";

export const PROFESSOR_VIEW = 0;
export const STUDENT_VIEW = 1;

const chooseViewSlice = createSlice({
    name: 'view',
    initialState: {
        value: PROFESSOR_VIEW,
    },
    reducers: {
        viewAsProfessor: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            state.value = PROFESSOR_VIEW
        },
        viewAsStudent: state => {
            state.value = STUDENT_VIEW
        },
    },
})

export const { viewAsStudent, viewAsProfessor } = chooseViewSlice.actions;
//The above creates actions view/viewAsStudent and view/viewAsProfessor

export default chooseViewSlice.reducer;
