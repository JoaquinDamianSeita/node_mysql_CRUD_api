module.exports = (sequelize, type) => {
  return sequelize.define("operation", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    monto: {
      allowNull: false,
      type: type.DECIMAL(10, 2)
    },
    concepto: {
      allowNull: false,
      type: type.STRING,
    },
    tipo: {
      allowNull: false,
      type: type.STRING,
    },
  });
};
