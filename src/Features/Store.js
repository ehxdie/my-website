import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './themeSlice'

// Setting up the redux store
export const store = configureStore({
    reducer: themeSlice.reducer

})