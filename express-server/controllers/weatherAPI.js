const axios = require('axios');

const BASEURL = 'https://api.openweathermap.org'

module.exports = {
    fiveDayForcast: function (req, res) {
        console.log('weatherAPI - fiveDayForcast called');
        axios.get(BASEURL + '/data/2.5/forecast', {
            params: {
                q: 'London,us',
                mode: 'JSON',
                appid: process.env.OPENWEATHERMAP_APPID
            }
        })
            .then(function (response) {
                res.send(response.data);
            })
            .catch(function (error) {
                console.log('error in fiveDayForcast API call: ' + error);
                res.status(500)
            })
    }
}