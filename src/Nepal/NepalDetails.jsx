import React from 'react';
import { Link } from 'react-router-dom';
import './Nepal.css';
import image from '../images/image4.jpg'; // Import the image file

function NepalDetails() {
  return (
    <div className="container"> {/* Apply container class here */}
      <h3>
        <Link to="/">Home</Link> / Nepal
      </h3>
      <img src={image} alt="Nepal" className="carousel-image" /> {/* Apply carousel-image class here */}
    </div>
  );
}

export default NepalDetails;
