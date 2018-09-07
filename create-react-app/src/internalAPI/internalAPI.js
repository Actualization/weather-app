import axios from 'axios';

export default {
    fiveDayForcast: async function (location) {
        return axios.post('/api/forcast', {
            params: {
                location: location
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log('error in fiveDayForcast internal API call: ' + error);
                return {status : 'error'}
            })
    }

};