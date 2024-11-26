import React from 'react';
import { useSelector } from 'react-redux';
import './TrendingMovies.css';

const TrendingMovies = () => {
  const movies = useSelector((state) => state.movies.items);

  // Limit to 12 movies for display
  const limitedMovies = movies.slice(0, 12);

  return (
    <div className="movies-section">
      <h2>Trending Movies</h2>
      <div className="movie-grid">
        {limitedMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="release-date">Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
