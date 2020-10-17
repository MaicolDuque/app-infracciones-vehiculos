const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tipo_vehiculos = require("./tipo-vehiculo.model")(sequelize, Sequelize);

module.exports = db;