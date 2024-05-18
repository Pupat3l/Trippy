import express from "express";
import connectToDb from "./db.js";

const router = express.Router();
const db = await connectToDb();

router.get('/user', async (res,req)=>{
  try {
    const users = await db.collection('users').find({}).toArray();
    res.json(users);
  } catch (error) {
    console.error('Error fetching printing history:', error);
    res.status(500).json({ error: 'An error occurred while fetching printing history' });
  }
});

router.get('/user/itinerary', async (req, res) => {
  try {
    const itineraries = await db.collection('itineraries').find({}).toArray();

    res.json(itineraries);
  } catch (error) {
    console.error('Error fetching user itinerary:', error);
    res.status(500).json({ error: 'An error occurred while fetching user itinerary' });
  }
});



router.get('/places', async (req, res) => {
  try {
    const location = req.query.location;
    const encodedLocation = encodeURIComponent(location);
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${encodedLocation}&radius=1500&type=tourist_attraction&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const topAttractions = data.results.slice(0, 10).map(attraction => ({
      id: attraction.place_id,
      name: attraction.name,
    }));
    res.json(topAttractions);
  } catch (error) {
      res.status(500).send({ error: 'Failed to fetch places' });
  }
});

router.post('/save', async (req, res) => {
  try {
    const { names } = req.body;

    if (!names || !Array.isArray(names)) {
      console.error('Invalid itinerary data:', req.body);
      return res.status(400).json({ error: 'Invalid itinerary data' });
    }

    await db.collection('itineraries').insertOne({ names });

    res.status(201).json({ message: 'Itinerary saved successfully' });

  } catch (error) {
    console.error('Error saving itinerary:', error);
    res.status(500).json({ error: 'Failed to save itinerary' });
  }
});



export default router;
