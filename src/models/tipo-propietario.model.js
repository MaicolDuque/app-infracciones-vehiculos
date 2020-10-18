module.exports = (sequelize, Sequelize, db) => {
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

  //Relationships - one to mane
  TipoPropietario.hasMany(db.propietario, {
    foreignKey: { 
      name: 'id_tipo',
      type: Sequelize.INTEGER
    }
  });

  return TipoPropietario;
};