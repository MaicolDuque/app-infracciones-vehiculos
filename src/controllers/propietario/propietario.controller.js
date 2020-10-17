const db = require("../../models");
const Propietario = db.propietario;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  Propietario.findAll()
  .then( data => res.send(data))
  .catch(handleError(res))
}

function create(req, res){
  Propietario.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

module.exports = {
  show,
  create
}