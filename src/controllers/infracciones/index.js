const { Router } = require('express');
const controller = require("./infracciones.controller");

const router = new Router();

router.get('/infracciones', controller.show)
router.get('/infracciones/editar/:id', controller.viewEdit)
router.post('/infracciones', controller.create)
router.delete('/infracciones/:id', controller.destroy)
router.put('/infracciones/:id', controller.update)

//Páginas
router.get('/', controller.index)

module.exports = router

