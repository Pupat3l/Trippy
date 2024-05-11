// DestinationMap.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Maps() {
  const ApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [popularPlaces, setPopularPlaces] = useState([]);
  const destination="Paris";
  useEffect(() => {
    // Fetch popular places around the destination using Places API
    fetchPopularPlaces(destination)
      .then(places => setPopularPlaces(places))
      .catch(error => console.error('Error fetching popular places:', error));
  }, [destination]);

  const fetchPopularPlaces = async (destination) => {
    // Implement fetching popular places here (e.g., using Places API)
    // Return an array of popular places
    return []; // Placeholder, replace with actual implementation
  };
  return (
    <div>
    <LoadScript
      googleMapsApiKey={ApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={destination} />

        {popularPlaces.map(place => (
          <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default Maps;
