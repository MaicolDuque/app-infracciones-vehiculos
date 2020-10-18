module.exports = (sequelize, Sequelize, db) => {
  const Vehiculo = sequelize.define("vehiculo", {
    placa: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    fecha_matricula: {
      type: Sequelize.DATE
    }
  });

  // Relationships - one to many
  // db.tipo_vehiculo.hasMany(Vehiculo, {
  //   foreignKey: {
  //     name: 'id_tipo',
  //     type: Sequelize.INTEGER
  //   }
  // });

  Vehiculo.belongsTo(db.tipo_vehiculo, {
    foreignKey: {
      name: 'id_tipo',
      type: Sequelize.INTEGER
    }
  });

  Vehiculo.belongsTo(db.marca, {
    foreignKey: {
      name: 'id_marca',
      type: Sequelize.INTEGER
    }
  });

  Vehiculo.belongsTo(db.propietario, {
    foreignKey: {
      name: 'id_propietario',
      type: Sequelize.INTEGER
    }
  });

  return Vehiculo;
};