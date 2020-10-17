
const tipoVehiculos = require('../controllers/tipo-vehiculos')
const tipoPropietarios = require('../controllers/tipo-propietario')
const tipoSanciones = require('../controllers/tipo-sancion')
const propietarios = require('../controllers/propietario')

module.exports = (app) => {
  app.use("/tipo-vehiculos", tipoVehiculos);
  app.use("/tipo-propietarios", tipoPropietarios);
  app.use("/tipo-sanciones", tipoSanciones);
  app.use("/propietarios", propietarios);

  app.get('/test', (req, res ) => {
    res.render('index', {
      titulo: 'Inicio',
      session: JSON.stringify(req.session)
    })
  });

  // app.get('*',(req,res)=> {
  //   res.render('error', {
  //     titulo: "Error 404"
  //   })
  // });
}