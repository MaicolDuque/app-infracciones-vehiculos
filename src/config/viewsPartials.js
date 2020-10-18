/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */
const path = require('path')
const hbs = require ('hbs')
require('../views/helpers')


const dirPublic = path.join(__dirname, "../../public")
const dirViews = path.join(__dirname, '../views')
const dirPartials = path.join(__dirname, '../views/partials')

module.exports = (app, express) => {
  //Static
  app.use(express.static(dirPublic))
  app.use('/stylesheets/fontawesome', express.static('node_modules/@fortawesome/fontawesome-free'));

  //hbs
  app.set('view engine', 'hbs')
  app.set('views', dirViews)
  hbs.registerPartials(dirPartials)

}