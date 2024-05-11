import express from "express";
import connectToDb from "./db.js";

const router = express.Router();
const db = await connectToDb();

router.get('/user', (res,req)=>{
    res.status(200).send('user!')
})
const apiKey = 'AIzaSyDtVYyt5dRVALnFw855Z6hKAf2twoZgzsM';
const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.8566,2.3522&radius=50000&type=tourist_attraction&key=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.results.forEach(place => {
        console.log('Name: ', place.name);
        console.log('Address: ',place.vicinity);
        
    });
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

export default router;