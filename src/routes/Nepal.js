import React from 'react'
import Navbar from '../Components/Navbar';
import NepalDetails from '../Nepal/NepalDetails';
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg"
import TripSearchForm from '../Components/TripSearchForm';
import ContactAddress from '../Components/ContactAddress';
import Details from '../Nepal/Details';

function Nepal() {
  const images = [
    image4,
    image5
    // Add more image imports as needed
  ];
  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}> {/* Container with fixed height and scrollable */}
      <Navbar />
      <div style={{ padding: '20px' }}> {/* Padding for better spacing */}
        <NepalDetails images={images} /> {/* Render the Carousel component */}
        
       

      </div>
      <TripSearchForm/>
      <ContactAddress/>
      <Details image={image5} />     
        
       

      </div>
  )
}

export default Nepal
