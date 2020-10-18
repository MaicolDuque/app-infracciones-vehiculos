const db = require("../../models");
const Infraccion = db.infraccion;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  return Infraccion.findAll({
    include: [
      { model: db.tipo_sancion },
      { model: db.vehiculo }
    ],
    attributes: ['id', 'fecha', 'descripcion'],
  })
  .then( data => data )  //res.send(data)
  .catch(handleError(res))
}

function create(req, res){
  Infraccion.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

async function index(req, res){
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
  index
}