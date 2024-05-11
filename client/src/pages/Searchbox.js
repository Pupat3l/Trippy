import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const SearchBox = ({ history }) => {
  const [address, setAddress] = useState('');

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      // Redirect to a search results page with latLng or pass it to your backend for further processing
      history.push(`/search?lat=${latLng.lat}&lng=${latLng.lng}`);
    } catch (error) {
      console.error('Error selecting address:', error);
    }
  };

  return (
    <div>
      <h2>Find Your Destination</h2>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places...',
                className: 'search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

SearchBox.propTypes = {
  history: PropTypes.object.isRequired, // Ensure history object is passed as a prop
};

export default SearchBox;
