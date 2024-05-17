import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Dashboard.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    itineraryHistory: []
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
    <>
        <Navbar />
        <div className='container main-content'>
            <div className='row text-center'>
                <h2>User Information</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div className='row'>
                <h2>Itinerary History</h2>
                {user.itineraryHistory.length > 0 ? (
                    <div className='item'>
                        <ul>
                            {user.itineraryHistory.map((itinerary) => (
                            <li key={itinerary.id}>
                                {itinerary.names.join(', ')}
                            </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                <p>No itinerary history available</p>
                )}
            </div>
        </div>
        <Footer />
    </>
  );
};

export default ProfilePage;