import axios from 'axios';

export default {
    fiveDayForcast: function (location) {
        axios.get('/api/forcast', {
            params: {
                location: location
            }
        })
            .then(function (response) {
                console.log(response.data)
                return response.data;
            })
            .catch(function (error) {
                console.log('error in fiveDayForcast internal API call: ' + error);
            })
    }

};