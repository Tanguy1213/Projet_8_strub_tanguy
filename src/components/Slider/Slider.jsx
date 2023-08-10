import React, { useState } from 'react';
import leftArrow from '../../assets/Left_arrow.svg';
import rightArrow from '../../assets/Right_arrow.svg';
import './slider.scss'; // Assurez-vous d'importer votre fichier SCSS

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="slider-container">
        <div className="image-container">
          <img src={images[0]} alt="Slide 1" className="active" />
        </div>
      </div>
    );
  }

  return (
    <div className="slider-container">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="active" />
      </div>
      <button className="arrow-button prev" onClick={handlePrev}>
        <img src={leftArrow} alt="Left Arrow" />
      </button>
      <button className="arrow-button next" onClick={handleNext}>
        <img src={rightArrow} alt="Right Arrow" />
      </button>
      <div className="indicator">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

export default Slider;