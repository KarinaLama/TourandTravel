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
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0; // Reset to the first image if at the last image
      } else {
        return prevIndex + 1; // Move to the next image
      }
    });
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
      {images.map((image, index) => (
        <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          <img src={image.images} alt="carousel" className="carousel-image" style={{ position: 'relative', marginTop: '15vh' }} />
          {image.watermark && <div className="watermark" style={watermarkStyle}>{image.watermark}</div>}
        </div>
      ))}
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

// Style for the watermark
const watermarkStyle = {
  position: 'absolute',
  bottom: '0px', // Adjust the distance from the bottom edge
  right: '10px', // Adjust the distance from the right edge
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent white background
  color: 'white', // Watermark text color
  padding: '5px', // Padding around the text
  borderRadius: '5px', // Rounded corners
  fontWeight: 'bold'
};

export default Carousel;
