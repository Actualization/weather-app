import axios from 'axios';

export default {
    /**
     * Calls to internal API for forcast
     */
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
                console.log(error.response.data);
                if (error.response.data == 'city not found'){
                    return {status : 'city not found'}
                }
                else{
                    console.log('error in fiveDayForcast internal API call: ' + error);
                    return {status : 'error'}
                }
            })
    }

};