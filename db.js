const Sequelize = require("sequelize");
require('dotenv').config();

const operationModel = require("./models/operation");
const userModel = require("./models/user");

const sequelize = new Sequelize("tutorial_sequelize", "root", process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

const Operation = operationModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tables created!");
});

module.exports = { Operation, User };
