const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const {CourseEntity} = require("./models");

const BatchEntity = sequelize.define("Batch", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: true },
});

// BatchEntity.hasMany(CourseEntity,{
//     as: 'batchCourseId',
//     foreignKey: 'courseId',
//     allowNull: false
//   })
module.exports = BatchEntity;
