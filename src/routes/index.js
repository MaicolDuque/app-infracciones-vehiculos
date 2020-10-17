
const tipoVehiculos = require('../controllers/tipo-vehiculos')

module.exports = (app) => {
  app.use("/tipo-vehiculos",tipoVehiculos);
  // app.use("",cursos);
  // app.use("",usuarios);
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