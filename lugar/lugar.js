const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    let encodedUrl = encodeURI(direccion);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`;
    let resp = await axios.get(url);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la cuidad: ${direccion}`);
    }
    let results = resp.data.results[0];
    let coordenadas = results.geometry.location;

    return {
        direccion: results.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}