import React from 'react';
import './TrendingMovies.css';

const TrendingMovies = ({ movies }) => (
  <section className="movies-section">
    <h2>Trending Movies</h2>
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TrendingMovies;
