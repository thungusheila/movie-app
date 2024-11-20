// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice'; // Import the reducer from your movieSlice

const store = configureStore({
  reducer: {
    movies: movieReducer, // Add your slice reducer
  },
});

export default store; // Ensure the store is exported as default
