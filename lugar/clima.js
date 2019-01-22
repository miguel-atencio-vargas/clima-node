const axios = require('axios');

const getClima = async (lat, lnd) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lnd}&&units=metric&appid=e424881755950ef699ded0439c00cc44`;
    let resp = await axios.get(url);
    
   
    return resp.data.main.temp;
}

module.exports = {
    getClima
}