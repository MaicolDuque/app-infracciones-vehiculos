const db = require("../../models");
const Infraccion = db.infraccion;
const Vehiculo = db.vehiculo;
const TipoSanciones = db.tipo_sancion;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res) {
  return Infraccion.findAll({
    include: [
      { model: db.tipo_sancion },
      { model: db.vehiculo }
    ],
    attributes: ['id', 'fecha', 'descripcion'],
  })
    .then(data => data)  //res.send(data)
    .catch(handleError(res))
}

function create(req, res) {
  Infraccion.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

function destroy(req, res) {
  const id = req.params.id
  Infraccion.destroy({ where: { id } })
    .then(data => res.sendStatus(200).send(data) )
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id
  console.log("***********************************")
  console.log(req.body)
  return Infraccion.update( req.body, { where: { id } })
    .then(data => res.send(data) )
    .catch(handleError(res));
}

function findfById(req, res) {
  const id = req.params.id;
  return Infraccion.findAll({
    where: { id }, include: [
        { model: db.tipo_sancion }
      ]
    })
    .then(dato => dato)
    .catch(handleError(res))
}

function findAllVehiculos(req, res) {
  return Vehiculo.findAll()
    .then(dato => dato)
    .catch(handleError(res))
}

function findAllSanciones(req, res) {
  return TipoSanciones.findAll()
    .then(dato => dato)
    .catch(handleError(res))
}

async function viewEdit(req, res) {
  const info = await findfById(req, res);
  const vehiculos = await findAllVehiculos(req, res);
  const sanciones = await findAllSanciones(req, res);
  res.render('editar-infraccion', {
    info: info[0],
    vehiculos,
    sanciones
  })
}

async function index(req, res) {
  const infracciones = await show();
  return res.render('index', {
    titulo: 'Inicio',
    infracciones: infracciones,
    session: JSON.stringify(req.session)
  })
}

module.exports = {
  show,
  create,
  index,
  viewEdit,
  destroy,
  update
}