const db = require("../../models");
const Vehiculo = db.vehiculo;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  return Vehiculo.findAll({
    include: [
      { model: db.tipo_vehiculo },
      { model: db.marca },
      { model: db.propietario }
    ],
    attributes: ['placa', 'fecha_matricula']
  })
  .then( data => data )  //res.send(data)
  .catch(handleError(res))
}

async function viewVehiculos(req, res){
  const vehiculos = await show(req, res);
  return res.render('vehiculos', {
    vehiculos
  });
}

function create(req, res){
  Vehiculo.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

module.exports = {
  show,
  create,
  viewVehiculos
}