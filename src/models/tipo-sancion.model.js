module.exports = (sequelize, Sequelize) => {
  const TipoSancion = sequelize.define("tipo_sancion", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    }
  });
  return TipoSancion;
};