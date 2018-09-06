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

                // forcast data to return
                var forcast;

                indexDayOfWeek = new Date().getDay();
                console.log(indexToDayName(indexDayOfWeek));

                
                res.send(response.data);
            })
            .catch(function (error) {
                console.log('error in fiveDayForcast API call: ' + error);
                res.status(500)
            })
    }
}
function indexToDayName(dayNumb){
    switch (dayNumb) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thrusday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
    }
    
    return dayOfWeek;
}