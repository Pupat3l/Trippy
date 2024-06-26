import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import Search from '../components/Search.js';
import AttractionList from '../components/AttractionList';
import Itinerary from '../components/Itinerary';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Maps from '../components/Maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

function Dashboard() {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [attractions, setAttractions] = useState([]);
    const [itinerary, setItinerary] = useState([]);
    const { isAuthenticated } = useAuth0();

    const handlePlaceSelect = place => {
        setSelectedPlace(place);
        setItinerary([]);
        if (place && place.latLng) {
            const { lat, lng } = place.latLng;
            const location = `${lat},${lng}`;
    
            fetch(`/api/places?location=${location}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setAttractions(data);
                })
                .catch(error => {
                    console.error('Error fetching attractions:', error);
                });
        } else {
            console.error('Selected place does not have valid geometry or location information');
        }
    };

    const handleAddToItinerary = attraction => {
      const isThere = itinerary.some(item => item.id === attraction.id);
      if (!isThere) {
        setItinerary(prevItinerary => [...prevItinerary, attraction]);
      } else {
        alert('Attraction already exists in Itinerary');
      }
    };
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
  }
    return (
      <>
        <Navbar />
        <div className="main-content">
            <div className="row search-maps">
              <div className="col-md-6 blur-box">
                <Search onSelect={handlePlaceSelect}  />
              </div>
              <div className="col-md-6 blur-box">
                <Maps selectedPlace={selectedPlace} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="box">
                  <h2 className="box-title">Attractions</h2>
                  <AttractionList attractions={attractions} onAddToItinerary={handleAddToItinerary} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <h2 className="box-title">Itinerary</h2>
                  <Itinerary itinerary={itinerary} />
                </div>
              </div>
            </div>
        </div>
        <Footer />
      </>
    );
  }
export default Dashboard;
