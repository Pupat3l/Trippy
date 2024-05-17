import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage.js';
import Dashboard from './pages/Dashboard.js';
import Profile from './pages/Profile.js';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/loginButton.js';

function App() {
  /*const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  const {isLoading, error} = useAuth0();
  if (isLoading) return <div>Loading....</div>
  if (error) return <div>Authentication error</div>*/

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
