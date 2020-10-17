const db = require("../../models");
const Marca = db.marca;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  Marca.findAll()
  .then( data => res.send(data))
  .catch(handleError(res))
}

function create(req, res){
  Marca.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

module.exports = {
  show,
  create
}