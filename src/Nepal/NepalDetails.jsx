import React from 'react';
import { Link } from 'react-router-dom';
import './Nepal.css';
import image from '../images/image4.jpg'; // Import the image file

function NepalDetails() {
  return (
    <div>
    <div className="container">
      {/* Use the correct route path in the Link */}
      <h3>
        <Link to="/">Home</Link> / Nepal
      </h3>
      {/* Use the imported image */}
      <img src={image} alt="Nepal" style={{marginLeft: '10px'}} />
     
    </div>
    {/* <div className='paragraph'>
     <p > Nepal is a landlocked country in Southern Asia, between the Tibet autonomous region of China and India. It contains eight of the world's 10 highest peaks, including Mount Everest the world's tallest mountain and Lumbini, the birth place of Gautama Buddha, the founder of Buddhism. Nepal recently was declared a republic and has abolished the monarchy.
     Nepal has an elevation of 8848 meters, which is Mt. Everest, and regions which have an elevation of 60 meters squeezed into 500 kilometers making it culturally, geographically and naturally diverse. Nepal is one of the richest countries in the world in terms of natural beauty due to its unique nature. The wild variation fosters an incredible variety of ecosystems, the greatest mountain range on earth, thick tropical jungles teeming with a wealth of wildlife, thundering rivers, forested hills and frozen valleys.
     
     Within this spectacular geography are some of the richest cultures of Himalayan heritage Nepal, home of Mt Everest, is also home of some 23.1millon people belonging to 101 ethnic groups who speak over 92 different languages, most living rural lives in their own little worlds, along the length of the Himalayas. The best way to explore The exotic Himalayan nature and culture of Nepal is by walking through these villages and meeting the charming people, as the great Swiss Geologist Tony Hagen did in the 1950s, before Nepal even opened its doors to the outside world. </p>
     </div> */}
     </div>   
  );
}

export default NepalDetails;
