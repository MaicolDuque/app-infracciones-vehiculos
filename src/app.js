const express = require('express')
const app = express()

const configViews = require('./config/viewsPartials')
const configExpress = require('./config/express')
const configRoutes = require('./routes')
const db = require("./models");

db.sequelize.sync();
configViews(app, express)
configExpress(app)
configRoutes(app)

module.exports = app;