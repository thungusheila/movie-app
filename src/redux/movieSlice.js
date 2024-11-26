import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk to fetch movies from TMDb API
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (searchQuery, { rejectWithValue }) => {
    try {
      // Make API call to TMDb search endpoint
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: '9ae1cfcc5d093eece27697647bf4c56f', // TMDb API Key
            query: searchQuery, // Search query
          },
        }
      );

      // Check if the API response contains results
      if (!response.data.results || response.data.results.length === 0) {
        return rejectWithValue('No movies found'); // Reject if no results
      }

      // Filter out movies with missing poster images
      const validMovies = response.data.results.filter(
        (movie) => movie.poster_path !== null
      );

      return validMovies; // Return only movies with valid poster images
    } catch (error) {
      return rejectWithValue(error.response?.data?.status_message || error.message); // Handle errors
    }
  }
);

const initialState = {
  items: [], // List of fetched movies
  status: 'idle', // Loading status
  error: null, // Error message
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading'; // Set status to loading
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded
        state.items = action.payload; // Update state with fetched movies
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed
        state.error = action.payload || action.error.message; // Set the error message
      });
  },
});

export default movieSlice.reducer;
