const express = require('express');
const router = express.Router();

// Importar las funciones del middleware
const { Tiempo, saludo } = require("../middleware/middleware");

router.get("/", Tiempo, saludo, (req, res) => {
    res.render("inicio");
});

router.get("/mensaje", Tiempo, saludo, (req, res) => {
    res.render("mensaje"); 
});

module.exports = router;
