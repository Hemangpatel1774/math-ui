import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    marksObj : null,
    answers : null,
};

const markSlice = createSlice({
    name: 'mark',
    initialState,
    reducers: {
        setMark: (state, action) => {
            state.marksObj = action.payload;
        },
        createAnswers: (state, action) => {
            state.answers = action.payload;
        },

    }
});

export const { setMark ,createAnswers} = markSlice.actions;
export default markSlice.reducer;