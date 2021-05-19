const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");

const GroupEntity = sequelize.define("Group", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
});

module.exports = GroupEntity;
