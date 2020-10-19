const { Router } = require('express');
const controller = require("./marca.controller");

const router = new Router();

router.get('/', controller.show)
router.get('/listar', controller.viewMarcas)
router.post('/', controller.create)

module.exports = router

