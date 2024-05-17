import React, {useState} from "react";
import ItineraryItem from "./ItineraryItem";
import '../pages/Dashboard.css';

function Itinerary({ itinerary }){
    const [saving, setSaving] = useState(false);

    const saveItinerary = async () => {
        setSaving(true);

        const itineraryNames = itinerary.map(item => item.name);
        console.log(itineraryNames);
        try {
          const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ names: itineraryNames })
          });
          
          if (!response.ok) {
            throw new Error('Failed to save itinerary');
          }
    
          alert('Itinerary saved successfully!');
        } catch (error) {
          console.error('Error saving itinerary:', error);
        } finally {
          setSaving(false);
        }
      };    
    

    return(
        <div className="item-box">
            {itinerary.map(item => (
              <ItineraryItem key={item.id} item={item} />
            ))}
           {itinerary.length > 0 && (
              <button className='save-button' onClick={saveItinerary} disabled={saving}>
                {saving ? 'Saving...' : 'Save Itinerary'}
              </button>
            )}
        </div>
    )
}

export default Itinerary;
