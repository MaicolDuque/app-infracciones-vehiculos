const { Router } = require('express');
const controller = require("./tipo-vehiculos.controller");

const router = new Router();

router.get('/', controller.show)
router.get('/listar', controller.viewTipoVehiculos)
router.post('/', controller.create)

module.exports = router

