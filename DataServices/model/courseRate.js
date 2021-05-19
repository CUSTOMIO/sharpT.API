const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const { CourseEntity } = require("./models");

const CourseRateEntity = sequelize.define("CourseRate", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  price: { type: Sequelize.BIGINT, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  isActive: { type: Sequelize.BOOLEAN, allowNull: false },
});

CourseRateEntity.belongsTo(CourseEntity,{
    as: 'course_Id',
    foreignKey: 'courseId',
    allowNull: false
})


module.exports = CourseRateEntity;
