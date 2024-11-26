import React from 'react';
import './NavBar.css';
import logo from "../assets/Mask group.svg"
import movies from "../assets/Movies..svg"


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Use the imported SVG as a component */}
        <img 
          src={logo}  
         alt="logo" 
          className="navbar-logo" 
        />
        {/* Replace text with image for the movie title */}
        <img 
          src={movies}  
          alt="Movies Title" 
          className="navbar-title-image" 
        />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#genre">Genre</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#tvshows">TV Shows</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
