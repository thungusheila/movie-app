// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');  // To make API requests (like fetching from OMDb API)
require('dotenv').config(); // To use environment variables for API keys

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Use JSON middleware
app.use(express.json());

// Dummy data for movie-related routes (can be replaced with actual OMDb API)
const trendingMovies = [
  { Title: "Movie 1", Poster: "poster1.jpg" },
  { Title: "Movie 2", Poster: "poster2.jpg" },
];

const recommendMovies = [
  { Title: "Movie 3", Poster: "poster3.jpg" },
  { Title: "Movie 4", Poster: "poster4.jpg" },
];

// API endpoint to get trending movies
app.get('/api/trending', (req, res) => {
  res.json(trendingMovies);  // Replace with OMDb API request in real case
});

// API endpoint to get recommendations
app.get('/api/recommend', (req, res) => {
  res.json(recommendMovies);  // Replace with OMDb API request in real case
});

// API endpoint to get new movies
app.get('/api/new', (req, res) => {
  res.json([{ Title: "New Movie 1", Poster: "newposter1.jpg" }]);  // Replace with OMDb API request
});

// OMDb API Example: Fetch movie details (use real API key)
app.get('/api/movie/:id', async (req, res) => {
  const movieId = req.params.id;
  const apiKey = process.env.OMDB_API_KEY; // Use your OMDb API key here
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movie data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
