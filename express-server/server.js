require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const weatherAPI = require('./controllers/weatherAPI')

// Routes
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.get('/api/forcast', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

console.log(process.env.OPENWEATHERMAP_APPID)

app.listen(port, () => console.log(`Listening on port ${port}`));