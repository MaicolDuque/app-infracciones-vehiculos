const { Router } = require('express');
const controller = require("./tipo-sancion.controller");

const router = new Router();

router.get('/', controller.show)
router.post('/', controller.create)

module.exports = router

