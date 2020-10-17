module.exports = (sequelize, Sequelize) => {
  const TipoPropietario = sequelize.define("tipo_propietario", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    }
  });
  return TipoPropietario;
};