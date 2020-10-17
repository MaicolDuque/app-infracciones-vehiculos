module.exports = (sequelize, Sequelize) => {
  const Marca = sequelize.define("marca", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    }
  });
  return Marca;
};