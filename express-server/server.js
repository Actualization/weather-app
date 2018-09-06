require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const weatherAPI = require('./controllers/weatherAPI')

// setup middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/forcast', (req, res) => {
  weatherAPI.fiveDayForcast (req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));