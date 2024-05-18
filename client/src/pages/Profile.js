import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Profile.css';

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [itineraryHistory, setItineraryHistory] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/user/itinerary')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch itinerary data');
          }
          return response.json();
        })
        .then(data => {
          setItineraryHistory(data);
        })
        .catch(error => {
          console.error('Error fetching itinerary data:', error);
        });
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
}
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="main-content flex-grow-1">
        <div className="row text-center">
          <div className="col-md-4"></div>
          <div className="col-md-4 box">
            <h2>User Information</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : isAuthenticated ? (
              <>
                <img
                  src={user.picture}
                  alt="Profile"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: '150px', height: '150px' }}
                />
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </>
            ) : (
              <p>Please log in to view profile</p>
            )}
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col">
            <div className='profile-box'>
              <h2 className='box-title'>Itinerary History</h2>
              {itineraryHistory.length > 0 ? (
                <ul className="list-group">
                  {itineraryHistory.map((itinerary) => (
                    <li key={itinerary.id} className="list-group-item">
                      {itinerary.names.join(', ')}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No itinerary history available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
