import { configureStore } from "@reduxjs/toolkit";
import markSlice from './markSlice';
const reduxStore = configureStore({
    reducer : markSlice
})

export default reduxStore;