const { Router } = require('express');
const controller = require("./propietario.controller");

const router = new Router();

router.get('/', controller.show)
router.get('/listar', controller.viewPropietarios)
router.post('/', controller.create)

module.exports = router

