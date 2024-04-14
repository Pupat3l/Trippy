import React,{useEffect} from "react";

export default function LandingPage() {
    useEffect(() => {
        fetch("/api/5").then((response) =>
        response.json().then((json) => console.log(json))
        );
    }, []);      
    return (
        <div>
            <nav>
                <h1>Trippy</h1>
            </nav>
        </div>
    );
};