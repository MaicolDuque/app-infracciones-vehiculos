const db = require("../../models");
const TipoVehiculos = db.tipo_vehiculo;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  return TipoVehiculos.findAll()
  .then( data => data ) //res.send(data)
  .catch(handleError(res))
}

function create(req, res){
  return TipoVehiculos.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

async function viewTipoVehiculos(req, res){
  const tipos = await show(req, res);
  console.log(tipos)
  return res.render('tipo-vehiculos', {
    tipos
  });
}

module.exports = {
  show,
  create,
  viewTipoVehiculos
}