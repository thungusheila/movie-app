import React from 'react';
import './YouMayLikeSection.css';

const YouMayLikeSection = ({ movies }) => (
  <section className="movies-section">
    <h2>You May Also Like</h2>
    {movies.length === 0 ? (
      <p>No additional movie recommendations at the moment.</p>
    ) : (
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default YouMayLikeSection;
