// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import TripSearchForm from '../Components/TripSearchForm';
// import Carousel from '../Components/Carousel';
// import image1 from '../images/image1.jpg';
// import image2 from '../images/image2.jpg';
// import image3 from '../images/image3.jpg';
// import ContactAddress from '../Components/ContactAddress';
// import FeaturesTrip from '../Components/FeaturesTrip';

// function Home() {
//   // Get the current location
//   const location = useLocation();

//   // Define your images for the carousel with watermarks
//   const images = [
//     { url: image1, watermark: 'Bouddhanth Buddhist Stupa - Kathmandu Nepal' },
//     { url: image2, watermark: 'Fewa Lake - Pokhara Nepal' },
//     ,
//     { url: image3, watermark: 'Mt. Everset - Highest point on the Earth - Nepal' },
//     // Add more images with watermarks as needed
//   ];

//   return (
//     <div style={{ height: '100vh', overflowY: 'auto' }}>
//       {/* Render the Navbar component with the activePage prop set to the current location */}
//       <Navbar activePage={location.pathname} />
//       <div style={{ padding: '20px' }}>
//         {/* Render the Carousel component with the defined images */}
//         <Carousel images={images} />
//       </div>
//       {/* Render other components */}
//       <TripSearchForm />
//       <ContactAddress />
//       <FeaturesTrip />
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import TripSearchForm from '../Components/TripSearchForm';
import Carousel from '../Components/Carousel';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import ContactAddress from '../Components/ContactAddress';
import FeaturesTrip from '../Components/FeaturesTrip';

function Home() {
  // Get the current location
  const location = useLocation();

  // Define your image URLs for the carousel
  const images = [
    { images: image1, watermark: 'Bouddhanth Buddhist Stupa - Kathmandu Nepal' },
    { images: image2, watermark: 'Fewa Lake - Pokhara Nepal' },
    
    { images: image3, watermark: 'Mt. Everset - Highest point on the Earth - Nepal' },
    // Add more image imports as needed
  ];

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      {/* Render the Navbar component with the activePage prop set to the current location */}
      <Navbar activePage={location.pathname} />
      <div style={{ padding: '20px' }}>
        {/* Render the Carousel component with the defined images */}
        <Carousel images={images} />
      </div>
      {/* Render other components */}
      <TripSearchForm />
      <ContactAddress />
      <FeaturesTrip />
    </div>
  );
}

export default Home;