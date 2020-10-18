module.exports = (sequelize, Sequelize, db) => {
  const Propietario = sequelize.define("propietario", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    direccion: {
      type: Sequelize.STRING
    }
  });

  //Relationships - one to mane
  // db.tipo_propietario.hasMany(Propietario, {
  //   foreignKey: { 
  //     name: 'id_tipo',
  //     type: Sequelize.INTEGER
  //   }
  // });
  // Propietario.belongsTo(db.tipo_propietario, {
  //   foreignKey: { 
  //     name: 'id_tipo',
  //     type: Sequelize.INTEGER
  //   }
  // });


  return Propietario;
};