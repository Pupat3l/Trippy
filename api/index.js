import express from 'express';
import fetch from 'node-fetch';
import router from './routes.js';

const app = express();
const port = process.env.PORT || 5510;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  fetch('https://api.gameofthronesquotes.xyz/v1/houses')
  .then(response => response.json())
  .then(json => res.json(json)); 
});

app.use('/api', router);

app.listen(port, () => console.log(`Server listening on port ${port}`));
