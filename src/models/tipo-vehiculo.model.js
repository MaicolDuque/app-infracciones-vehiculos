module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tipo_vehiculo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};