const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tipo_vehiculo    = require('./tipo-vehiculo.model')(sequelize, Sequelize);
db.tipo_propietario = require('./tipo-propietario.model')(sequelize, Sequelize, db);
db.propietario      = require('./propietario.model')(sequelize, Sequelize, db);
db.tipo_sancion     = require('./tipo-sancion.model')(sequelize, Sequelize, db);
db.marca            = require('./marca.model')(sequelize, Sequelize);
db.vehiculo         = require('./vehiculo.model')(sequelize, Sequelize, db);
db.infraccion       = require('./infraccion.model')(sequelize, Sequelize, db);

module.exports = db;