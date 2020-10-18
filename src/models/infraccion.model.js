module.exports = (sequelize, Sequelize, db) => {
  const Infraccion = sequelize.define("infraccion", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: Sequelize.DATE
    }
  }, {
    tableName: 'infracciones'
  });

  Infraccion.belongsTo(db.tipo_sancion, {
    foreignKey: {
      name: 'id_tipo',
      type: Sequelize.INTEGER
    }
  });

  Infraccion.belongsTo(db.vehiculo, {
    foreignKey: {
      name: 'placa_vehiculo',
      type: Sequelize.STRING
    }
  });

  return Infraccion;
};