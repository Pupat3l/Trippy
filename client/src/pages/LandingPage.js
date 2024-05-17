import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';
import LoginButton from '../components/loginButton';
import LogOutButton from '../components/LogOutButton';
import Profile from '../components/Profile';

function LandingPage() {
    return (
        <div className="main-content">
            <div className='box'>
                <h1>Welcome to Our Service</h1>
                <p>Sign up or sign in to get started.</p>
                <LoginButton />
                <LogOutButton />
                <Profile />
                <Link to="/dashboard" className="link-btn">
                    DashBoard
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
