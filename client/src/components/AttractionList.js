import React from 'react';
import Attraction from './Attraction';
import '../pages/Dashboard.css';

function AttractionList({ attractions, onAddToItinerary }) {
  if (!Array.isArray(attractions)) {
    return <div>No attractions available</div>;
  }

  return (
    <div className="item-box">
        {attractions.map(attraction => (
          <div key={attraction.id}>
            <Attraction attraction={attraction} onAddToItinerary={onAddToItinerary} />
          </div>
        ))}
    </div>
  );
}

export default AttractionList;
