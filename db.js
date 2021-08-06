const Sequelize = require("sequelize");

const operationModel = require("./models/operation");
const userModel = require("./models/user");

const sequelize = new Sequelize("tutorial_sequelize", "root", "Platense_008", {
  host: "localhost",
  dialect: "mysql",
});

const Operation = operationModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tables created!");
});

module.exports = { Operation, User };
