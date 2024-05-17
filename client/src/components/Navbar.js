import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
    <header>
        <nav className="navbar bg-dark border-bottom sticky-top navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <h1>Trippy</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-underline ms-auto">
                        <Link className="nav-link text-white" to="/">Home</Link>
                        <Link className="nav-link text-white" to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
        </nav>   
    </header>
    );
};