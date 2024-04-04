import React, { useState } from 'react';
import './Style.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel" style={{ position: 'relative', overflow: 'hidden' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showButtons && (
        <>
          <button onClick={prevSlide} style={buttonStyleLeft}>{'<'}</button>
          <button onClick={nextSlide} style={buttonStyleRight}>{'>'}</button>
        </>
      )}
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
    </div>
  );
};



// Style for the left button
const buttonStyleLeft = {
  position: 'absolute',
  top: '60%',
  left: '43px', // Adjust the distance from the left edge
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker background color
  color: 'white', // Button text color
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  fontSize: '24px',
  cursor: 'pointer',
  zIndex: '1', // Ensure buttons are above the image
};

// Style for the right button
const buttonStyleRight = {
  position: 'absolute',
  top: '60%',
  right: '68vh', // Adjust the distance from the right edge
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker background color
  color: 'white', // Button text color
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  fontSize: '24px',
  cursor: 'pointer',
  zIndex: '1', // Ensure buttons are above the image
};
// const imageStyle = {
//     width: '65%', // Adjust the width of the image as needed
//     height: '30%', // Maintain aspect ratio
//     display: 'block',
//     margin: '10vh 5vh 0', // Center the image horizontally

//     '@media (max-width: 768px)': {
//         width: '100%', // Adjusted width for smaller screens
//         height: '100vh', // Adjusted height for smaller screens
//         objectFit: 'cover', // Ensure image covers the entire container
//       }
//   };
export default Carousel;
