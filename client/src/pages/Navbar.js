import React from "react";
import '../App.css';


export default function Navbar(){
    return (
    <header>
        <nav className="navbar bg-dark border-bottom fixed-top navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <h1>Trippy</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-underline ms-auto">
                        <a className="nav-link active text-danger" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-white" href="#">Profile</a>
                        <a className="nav-link text-white" href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>   
    </header>
    );
};