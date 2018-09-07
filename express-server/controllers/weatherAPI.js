const axios = require('axios');

const BASEURL = 'https://api.openweathermap.org'

module.exports = {
    fiveDayForcast: function (req, res) {
        console.log('weatherAPI - fiveDayForcast called');
        axios.get(BASEURL + '/data/2.5/forecast', {
            params: {
                q: req.body.params.location,
                mode: 'JSON',
                units: 'imperial',
                appid: process.env.OPENWEATHERMAP_APPID
            }
        })
            .then(function (response) {

                var currentDay = new Date()
                var indexCurrentDayOfWeek = currentDay.getDay();

                //separate the forcasts into days
                var days = []
                for (i = 0; i < 6; i++) {
                    //During first loop if too late to get further forcasts for the same day, begin with next day
                    if (i == 0) {
                        if (currentDay.setHours(0, 0, 0, 0) !== new Date(response.data.list[0].dt_txt).setHours(0, 0, 0, 0)) {
                            currentDay.setDate(currentDay.getDate() + 1);
                            indexCurrentDayOfWeek += 1;
                        }
                    }

                    var day = {};

                    //add name of day
                    day['dayName'] = dayIndexToDayName(indexCurrentDayOfWeek);

                    //add forcasts for that day into day
                    day['forcasts'] = [];
                    for (j = 0; j < response.data.list.length; j++) {
                        //if the forcast is today
                        if (currentDay.setHours(0, 0, 0, 0) === new Date(response.data.list[j].dt_txt).setHours(0, 0, 0, 0)) {
                            day['forcasts'].push(response.data.list[j])
                        }
                    }
                    days.push(day);
                    //increment after first loop
                    currentDay.setDate(currentDay.getDate() + 1);
                    indexCurrentDayOfWeek += 1;
                }

                fiveDayForcast = {};
                fiveDayForcast['city'] = response.data.city;
                fiveDayForcast['days'] = days;

                res.send(fiveDayForcast);
            })
            .catch(function (error) {
                console.log('error in fiveDayForcast API call: ' + error);
                res.status(500)
            })
    }
}

function dayIndexToDayName(dayNumb) {
    while (dayNumb > 6) {
        dayNumb = dayNumb - 7;
    }
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