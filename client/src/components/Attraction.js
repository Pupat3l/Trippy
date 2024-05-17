import React from 'react';
import '../pages/Dashboard.css';

function Attraction({ attraction, onAddToItinerary }) {
  return (
    <div className="item">
      <h4>{attraction.name}</h4>
      <button onClick={() => onAddToItinerary(attraction)}>+</button>
    </div>
  );
}

export default Attraction;
