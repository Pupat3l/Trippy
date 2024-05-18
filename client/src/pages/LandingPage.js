import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect
import './Landing.css';
import LoginButton from '../components/loginButton';
function LandingPage() {
    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />; // Use Navigate instead of Redirect
    }

    return (
        <div className="landing-main-content">
            <div className='landing-row'>
                <div className='landing-col-md-8'>
                    <h1 className='landing-boxtitle'>Welcome to Our Service</h1>
                    <p className='landing-subtitle'>Sign up or sign in with Auth0 to get started.</p>
                </div>
                <div className='landing-col-md-4 mask'>
                    <LoginButton />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
