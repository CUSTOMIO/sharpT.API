const mysql = require("mysql2");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sharpTutorial", "root", "asdf1234@#", {
  dialect: "mysql",
  host: "localhost",
  logging: true,
  dialectOptions: {
    connectTimeout: 60000,
  },
});

module.exports = sequelize;
