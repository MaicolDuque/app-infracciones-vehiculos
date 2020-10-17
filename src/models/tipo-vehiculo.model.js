module.exports = (sequelize, Sequelize) => {
  const TipoVehiculo = sequelize.define("tipo_vehiculo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    }
  });
  return TipoVehiculo;
};