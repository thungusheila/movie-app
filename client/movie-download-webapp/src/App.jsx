// src/App.jsx
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
  const [searchQuery, setSearchQuery] = useState('trending'); // Default to 'trending'

  // Fetch movies based on searchQuery
  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, [dispatch, searchQuery]); // Fetch whenever the searchQuery changes

  // Function to group movies into rows of 4
  // const chunkMovies = (moviesArray) => {
  //   const result = [];
  //   for (let i = 0; i < moviesArray.length; i += 4) {
  //     result.push(moviesArray.slice(i, i + 4));
  //   }
  //   return result;
  // };
  const trendingMovies = movies.length > 4 ? movies.slice(0, 4) : movies.slice(0, 4);
  const youMayLikeSection = movies.length > 4? movies.slice(4) : [];
    return (
      <div className="App">
        <Navbar />
        <Cover />
        {status === 'loading' && <p>Loading movies...</p>}
        {status === 'failed' && <p>Error loading movies</p>}
        {status === 'succeeded' && (
          <>
            <TrendingMovies movies={trendingMovies} />
            <YouMayLikeSection movies={youMayLikeSection} />
          </>)}
      {/* <h1>Movie App</h1> */}

      {/* About the site section */}
      {/* <section className="about">
        <h2>About This Site</h2>
        <p>
          Welcome to our movie app! Here, you can explore trending movies, get
          recommendations, and find the latest releases. Start searching and enjoy!
        </p>
      </section> */}

      {/* Trending Movies Section */}
      {/* <section className="movies-section">
        <h2>Trending Movies</h2>
        {status === 'loading' && <p>Loading trending movies...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        <div className="movie-grid">
          {status === 'succeeded' &&
            chunkMovies(movies).map((row, index) => (
              <div key={index} className="movie-row">
                {row.map((movie) => (
                  <div key={movie.imdbID} className="movie-item">
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Year}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section> */}

      {/* You May Also Like Section */}
      {/* <section className="movies-section">
        <h2>You May Also Like</h2>
        {status === 'loading' && <p>Loading movie suggestions...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        <div className="movie-grid">
          {status === 'succeeded' &&
            chunkMovies(movies).map((row, index) => (
              <div key={index} className="movie-row">
                {row.map((movie) => (
                  <div key={movie.imdbID} className="movie-item">
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Year}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section> */}

      {/* What's New Section */}
      {/* <section className="movies-section">
        <h2>What's New</h2>
        {status === 'loading' && <p>Loading new releases...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        <div className="movie-grid">
          {status === 'succeeded' &&
            chunkMovies(movies).map((row, index) => (
              <div key={index} className="movie-row">
                {row.map((movie) => (
                  <div key={movie.imdbID} className="movie-item">
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Year}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section> */}
    </div>
  );
}

export default App;
