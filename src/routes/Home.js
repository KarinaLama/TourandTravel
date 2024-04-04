// Home.js
import React from 'react';
import Navbar from '../Components/Navbar';
import TripSearchForm from '../Components/TripSearchForm';
import Carousel from '../Components/Carousel'; // Import the Carousel component

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import ContactAddress from '../Components/ContactAddress';
import FeaturesTrip from '../Components/FeaturesTrip';

function Home() {
  // Define your image URLs for the carousel
  const images = [
    image1,
    image2,
    image3,
    // Add more image imports as needed
  ];

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}> {/* Container with fixed height and scrollable */}
      <Navbar />
      <div style={{ padding: '20px' }}> {/* Padding for better spacing */}
        <Carousel images={images} /> {/* Render the Carousel component */}
        <TripSearchForm />
        <ContactAddress/>

      </div>
      <FeaturesTrip/>
    </div>
  );
}

export default Home;
