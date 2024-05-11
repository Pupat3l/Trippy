import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard.js';
import LandingPage from './pages/LandingPage/LandingPage.js'

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default App;
