// ParentComponent.js

import React from 'react';
import Carousel from './Carousel';
import TripSearchForm from './TripSearchForm';
import './ParentComponent.css'; // Import CSS for styling

function ParentComponents() {
  return (
    <div className="parent-container">
      <div className="left-column">
        <TripSearchForm />
      </div>
      <div className="right-column">
        <Carousel />
      </div>
    </div>
  );
}

export default ParentComponent;
