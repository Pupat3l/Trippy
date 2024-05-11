import React,{useEffect} from "react";
import Navbar from "../Navbar";
import '../../App.css';
import LogOutButton from "../../components/LogOutButton";
import LoginButton from "../../components/loginButton";
import Profile from "../../components/Profile";
import SearchBox from "../Searchbox";
export default function LandingPage() {
    useEffect(() => {
        fetchit();
      }, []);    
    const fetchit = () => {
        fetch("/api/hello")
        .then(res=> res.json())
        .then(json=> console.log(json));
      }         
    return (
        <div>
            <Navbar />
            <h1>Auth0 Login</h1>
            <LoginButton />
            <LogOutButton />
            <Profile />
        </div>
    );
};