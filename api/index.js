import express from 'express';
import fetch from 'node-fetch';
import routes from './routes.js';
const app = express();
const port = process.env.PORT || 5510;

//example
app.get('/api/hello', (req, res) => {
  fetch('https://api.gameofthronesquotes.xyz/v1/houses')
  .then(response => response.json())
  .then(json => res.json(json)); 
});


app.get('/api/:id', (req, res) =>{
  res.json({name:"pujan",id:req.params.id});
});

app.get('/api',routes);

app.listen(port, () => console.log(`Server listening on port ${port}`));