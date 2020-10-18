module.exports = (sequelize, Sequelize, db) => {
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

  // db.tipo_sancion.hasMany(db.infraccion, {
  //   foreignKey: {
  //     name: 'id_tipo',
  //     type: Sequelize.INTEGER
  //   }
  // });
  return TipoSancion;
};