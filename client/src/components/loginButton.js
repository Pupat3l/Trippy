import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import '../pages/Dashboard.css';
import { Navigate } from 'react-router-dom'; 

export default function LoginButton(){
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
      }
    return(
        !isAuthenticated && (
        <button className="auth-button" onClick={()=> loginWithRedirect()}>
            Sign In
        </button>
        )
    );
};
