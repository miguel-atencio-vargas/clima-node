const {
    argv
} = require('./config/yargs');
const {
    getLugarLatLng
} = require('./lugar/lugar');
const {
    getClima
} = require('./lugar/clima');





const getInfo = async (direccion) => {

    try {
        let coors = await getLugarLatLng(direccion);
        let temp = await getClima(coors.lat, coors.lng);
        return `La temperatura actual en ${coors.direccion} es de: ${temp} C°`;
    } catch (error) {
        return `No se pudo determinar el clima en: ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.log(e));