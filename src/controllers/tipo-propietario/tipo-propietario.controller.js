const db = require("../../models");
const TipoPropietario = db.tipo_propietario;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  TipoPropietario.findAll()
  .then( data => res.send(data))
  .catch(handleError(res))
}

function create(req, res){
  TipoPropietario.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

module.exports = {
  show,
  create
}