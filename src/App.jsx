import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './redux/movieSlice'; // Import the action
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import TrendingMovies from './components/TrendingMovies';
import YouMayLikeSection from './components/YouMayLikeSection';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items); // Get movies from Redux store
  const status = useSelector((state) => state.movies.status); // Get status (loading, succeeded, etc.)
  const error = useSelector((state) => state.movies.error); // Get any errors that occurred
  const [searchQuery, setSearchQuery] = useState('popular'); // Default search query for TMDb API

  // Fetch movies based on searchQuery
  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, [dispatch, searchQuery]);

  // Split movies into Trending and "You May Like" sections
  const trendingMovies = movies.slice(0, 12); // First 12 movies for trending
  const youMayLikeSection = movies.slice(12, 24); // Next 12 movies for "You May Like"

  return (
    <div className="App">
      <Navbar />
      <Cover />
      {status === 'loading' && <p className="loading">Loading movies...</p>}
      {status === 'failed' && <p className="error">Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <TrendingMovies movies={trendingMovies} />
          <YouMayLikeSection movies={youMayLikeSection} />
        </>
      )}
    </div>
  );
}

export default App;
