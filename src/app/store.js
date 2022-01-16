import { configureStore } from '@reduxjs/toolkit'
import chooseViewReducer from "../components/chooseView/chooseViewSlice"

export default configureStore({
    reducer: {
        view: chooseViewReducer,
    },
})
