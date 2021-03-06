
const tipoVehiculos = require('../controllers/tipo-vehiculos')
const tipoPropietarios = require('../controllers/tipo-propietario')
const tipoSanciones = require('../controllers/tipo-sancion')
const propietarios = require('../controllers/propietario')
const marcas = require('../controllers/marca')
const vehiculos = require('../controllers/vehiculos')
const infracciones = require('../controllers/infracciones')

module.exports = (app) => {
  app.use("/tipo-vehiculos", tipoVehiculos);
  app.use("/tipo-propietarios", tipoPropietarios);
  app.use("/tipo-sanciones", tipoSanciones);
  app.use("/propietarios", propietarios);
  app.use("/marcas", marcas);
  app.use("/vehiculos", vehiculos);
  app.use("/", infracciones);

  // paginas
  // app.get('/', (req, res ) => {
  //   res.render('index', {
  //     titulo: 'Inicio',
  //     infracciones: ["uno", "dos"],
  //     session: JSON.stringify(req.session)
  //   })
  // });

  // app.get('*',(req,res)=> {
  //   res.render('error', {
  //     titulo: "Error 404"
  //   })
  // });
}