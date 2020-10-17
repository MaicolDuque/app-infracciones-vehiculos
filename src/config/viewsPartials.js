/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */
const path = require('path')
const hbs = require ('hbs')


const dirPublic = path.join(__dirname, "../../public")
const dirViews = path.join(__dirname, '../views')
const dirPartials = path.join(__dirname, '../views/partials')

module.exports = (app, express) => {
  //Static
  app.use(express.static(dirPublic))

  //hbs
  app.set('view engine', 'hbs')
  app.set('views', dirViews)
  hbs.registerPartials(dirPartials)

}