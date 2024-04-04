// Hero.js
import React, { useState } from 'react';
import './Hero.css';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg',
    // Add more image URLs here
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="hero">
    </div>
  );
}

export default Hero;
