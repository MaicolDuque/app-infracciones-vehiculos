const { Router } = require('express');
const controller = require("./vehiculos.controller");

const router = new Router();

router.get('/', controller.show)
router.get('/listar', controller.viewVehiculos)
router.post('/', controller.create)

module.exports = router

