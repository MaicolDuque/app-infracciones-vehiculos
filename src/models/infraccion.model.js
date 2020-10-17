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

  db.tipo_sancion.hasMany(Infraccion, {
    foreignKey: {
      name: 'id_tipo',
      type: Sequelize.INTEGER
    },
    targetKey: 'id'
  });
  // Infraccion.belongsTo(db.tipo_sancion);

  db.vehiculo.hasMany(Infraccion, {
    foreignKey: {
      name: 'placa_vehiculo',
      type: Sequelize.STRING
    },
    targetKey: 'placa'
  });
  // Infraccion.belongsTo(db.vehiculo);

  return Infraccion;
};