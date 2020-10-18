const db = require("../../models");
const Infraccion = db.infraccion;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  Infraccion.findAll({
    include: [
      { model: db.tipo_sancion },
      { model: db.vehiculo }
    ],
    attributes: ['id', 'fecha']
  })
  .then( data => res.send(data))
  .catch(handleError(res))
}

function create(req, res){
  Infraccion.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

module.exports = {
  show,
  create
}