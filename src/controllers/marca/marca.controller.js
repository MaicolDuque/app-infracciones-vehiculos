const db = require("../../models");
const Marca = db.marca;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  return Marca.findAll()
  .then( data => data ) //res.send(data)
  .catch(handleError(res))
}

function create(req, res){
  return Marca.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

async function viewMarcas(req, res){
  const marcas = await show(req, res);
  return res.render('marcas', {
    marcas
  });
}

module.exports = {
  show,
  create,
  viewMarcas
}