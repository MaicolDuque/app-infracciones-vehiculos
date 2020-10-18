const { Router } = require('express');
const controller = require("./infracciones.controller");

const router = new Router();

router.get('/infracciones', controller.show)
router.post('/infracciones', controller.create)

//Páginas
router.get('/', controller.index)

module.exports = router

