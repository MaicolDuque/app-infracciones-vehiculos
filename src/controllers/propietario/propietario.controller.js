const db = require("../../models");
const Propietario = db.propietario;
const Op = db.Sequelize.Op;

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function show(req, res){
  return Propietario.findAll({
    include: [
      { model: db.tipo_propietario }
    ],
    attributes: ['id', 'nombre', 'direccion']
  })
  .then( data => data )  //res.send(data)
  .catch(handleError(res))
}

function create(req, res){
  return Propietario.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(handleError(res));
}

async function viewPropietarios(req, res){
  const propietarios = await show(req, res);
  return res.render('propietarios', {
    propietarios
  });
}

module.exports = {
  show,
  create,
  viewPropietarios
}