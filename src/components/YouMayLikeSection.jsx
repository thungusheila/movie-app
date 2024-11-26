import React from 'react';
import './YouMayLikeSection.css';

const YouMayLikeSection = ({ movies }) => (
  <section className="movies-section">
    <h2>You May Also Like</h2>
    {movies.length === 0 ? (
      <p>No additional movie recommendations at the moment.</p>
    ) : (
      <div className="movie-grid">
        {movies.slice(0, 12).map((movie) => ( // Ensure it displays only 12 movies
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={movie.title}
            />
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default YouMayLikeSection;
