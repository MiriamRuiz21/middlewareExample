// middleware.js
const saludo = (req, res, next) => {
    console.log("Programa funcionando");
    next();
};

const Tiempo = (req, res, next) => {
    const currentDate = new Date();
    console.log(`Fecha y Hora del servidor: ${currentDate}`);
    next();
};

module.exports = { Tiempo, saludo };
