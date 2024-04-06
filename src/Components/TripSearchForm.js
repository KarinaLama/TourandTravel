// TripSearchForm.js

import React, { useState } from 'react';
import './FormStyles.css';

const TripSearchForm = () => {
  const [destination, setDestination] = useState('');
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., perform a search based on selected criteria
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h4>TRIP SEARCH</h4>
        <label>
          <select value={destination} onChange={handleDestinationChange}>
            <option value="">Select Destination</option>
            <option value="Nepal">Nepal</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Tibet">Tibet</option>
            <option value="India">India</option>
          </select>
        </label>
        <br />
        <label>
          <select value={activity} onChange={handleActivityChange}>
            <option value="">Select Activity</option>
            <option value="Trekking">Trekking</option>
            <option value="Tour">Tour</option>
            <option value="Rafting">Expedition</option>
            <option value="Cultural Tour">Peak Climbing</option>
            <option value="Cultural Tour">Jungle Safari</option>
            <option value="Cultural Tour">Rafting</option>
            <option value="Cultural Tour">Moutain Flight</option>
            <option value="Cultural Tour">Helicopter Tour</option>
            <option value="Cultural Tour">Special Tours</option>
            <option value="Cultural Tour">Others</option>
          </select>
        </label>
        <br />
        <label>
          <select value={duration} onChange={handleDurationChange}>
            <option value="">Select Duration</option>
            <option value="1 Week">Less than 5 days</option>
            <option value="2 Weeks">5 - 10 days</option>
            <option value="3 Weeks">11-15 days</option>
            <option value="1 Month">16 - 20 days</option>
            <option value="1 Month">11 - 30 days</option>
            <option value="1 Month">dMore than 30 days</option>
          </select>
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default TripSearchForm;
