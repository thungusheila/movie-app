import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk to fetch movies from OMDb API
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=32a47b7d`
      );

      // Check if the API response is valid
      if (response.data.Response === 'False') {
        return rejectWithValue(response.data.Error); // Reject if no results
      }

      // Filter out movies with missing images (Poster is 'N/A')
      const validMovies = response.data.Search.filter(
        (movie) => movie.Poster !== 'N/A'
      );

      return validMovies; // Return only movies with valid images
    } catch (error) {
      return rejectWithValue(error.message); // Return error message if request fails
    }
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Set the valid movies to state
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message; // Set the error message
      });
  },
});

export default movieSlice.reducer;
