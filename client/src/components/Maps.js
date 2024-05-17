import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Maps = ({ selectedPlace }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    });

    loader.load().then(() => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: selectedPlace ? selectedPlace.latLng : { lat: -33.860664, lng: 151.208138 },
        zoom: 13,
      });

      if (selectedPlace) {
        new google.maps.Marker({
          position: selectedPlace.latLng,
          map,
        });
      }
    });
  }, [selectedPlace]);

  return <div className="map" ref={mapRef}/>;
};

export default Maps;
