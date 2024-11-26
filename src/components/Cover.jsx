import React from 'react';
import './Cover.css';
import watch from "../assets/Group 289881.svg";
import image1 from "../assets/image 23.svg";
import image2 from "../assets/Rectangle 6.svg";

const Cover = () => (
  <section className="cover">
    <div className="cover-title">
      <h2>FIND MOVIES</h2>
      <h3>TV SHOWS AND MORE</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi autem est tempore accusamus id, soluta obcaecati. Provident, voluptas consequuntur. Expedita nesciunt necessitatibus distinctio iure ab laborum repudiandae quia nam.
      </p>
      <div className="tutorial">
        <img 
          src={watch}  
          alt="watch" 
          className="watch-logo" 
        />
        <span className="watch-tutorial">Watch Tutorial</span>
      </div>
    </div>
    <div className="cover-images">
      <img 
        src={image1}  
        alt="image1" 
        className="cover-image image1" 
      />
      <img 
        src={image2}  
        alt="image2" 
        className="cover-image image2" 
      />
    </div>
  </section>
);

export default Cover;
