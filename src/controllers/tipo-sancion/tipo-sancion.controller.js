const db = require("../../models");
const TipoSancion = db.tipo_sancion;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  TipoSancion.findAll()
  .then( data => res.send(data))
  .catch(handleError(res))
}

function create(req, res){
  TipoSancion.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

module.exports = {
  show,
  create
}