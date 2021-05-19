const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const {BatchEntity} = require("./models");

const CourseEntity = sequelize.define("Course", {
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

CourseEntity.belongsTo(BatchEntity,{
  as: 'coursesBatchId',
  foreignKey: 'BatchId',
  allowNull: false
})

module.exports = CourseEntity;
