import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.js';
import Dashboard from './pages/Dashboard.js';

const root = createRoot(document.getElementById('root'));
const domain = process.env.REACT_AUTH0_DOMAIN;
const clientid = process.env.REACT_AUTH0_CLIENT_ID; 

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientid}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Dashboard />
  </Auth0Provider>
);