import { createSlice } from "@reduxjs/toolkit";

// Setting up state for the the application theme


export const themeSlice = createSlice({
    name: "toggleTheme",
    initialState: true,
    reducers: {
        toggleTheme: (state) => {
            return !state;
        }
    }
})

// getting the created action creators
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer