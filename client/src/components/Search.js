import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Search = ({ onSelect }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    });

    loader.load().then(() => {
      const google = window.google;
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
        types: ['(cities)'],
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          onSelect({
            address: place.formatted_address,
            latLng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            },
          });
        }
      });
    });
  }, [onSelect]);

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a city"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default Search;
