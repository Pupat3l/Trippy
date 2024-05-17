import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Profile.css';
import Profile from '../images/profile.png';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    itineraryHistory: [],
    profilePicture: Profile
  });

  useEffect(() => {
    fetch('/api/user/itinerary')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch itinerary data');
        }
        return response.json();
      })
      .then(data => {
        setUser(prevUser => ({
          ...prevUser,
          itineraryHistory: data
        }));
      })
      .catch(error => {
        console.error('Error fetching itinerary data:', error);
      });
  }, []);

    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="main-content flex-grow-1">
          <div className="row text-center">
          <div className="col-md-4"></div>
            <div className="col-md-4 box">
              <h2>User Information</h2>
              <img
              src={user.profilePicture}
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '150px', height: '150px' }}
            />
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col">
              <div className='box'>
                <h2 className='box-title'>Itinerary History</h2>
                {user.itineraryHistory.length > 0 ? (
                  <ul className="list-group">
                    {user.itineraryHistory.map((itinerary) => (
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