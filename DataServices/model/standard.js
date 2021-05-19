const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const { CourseEntity } = require("./models");

const StandardEntity = sequelize.define("Standard", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  isActive: { type: Sequelize.BOOLEAN, allowNull: false },
});
StandardEntity.belongsTo(CourseEntity,{
  as: 'standardCourseID',
  foreignKey: 'cousreId',
  allowNull: false
})

module.exports = StandardEntity;
