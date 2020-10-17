const db = require("../../models");
const TipoVehiculos = db.tipo_vehiculos;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  TipoVehiculos.findAll()
  .then( data => res.send(data))
  .catch(handleError(res))
}

function create(req, res){
  TipoVehiculos.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

module.exports = {
  show,
  create
}