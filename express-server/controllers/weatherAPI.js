const axios = require('axios');

module.exports = {
    fiveDayForcast: function(req, res) {
        console.log('reached');
        res.json({
            success:true
        })
    }
}