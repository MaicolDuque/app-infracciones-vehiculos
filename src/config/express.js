/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */


/**
 * Express configuration
 */

const bodyParser = require('body-parser');
const logger = require("morgan");


module.exports = (app) => {

  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(logger('dev'));

};
