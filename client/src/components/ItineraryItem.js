import React from "react";
import '../pages/Dashboard.css';

function ItineraryItem({ item }) {
    return(
        <div className="item">
            <h4>{item.name}</h4>
        </div>
    )
}

export default ItineraryItem;
