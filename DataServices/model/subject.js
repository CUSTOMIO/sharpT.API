const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const StandardEntity = require("./standard");

const SubjectEntity = sequelize.define("Subject", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },   
  name: { type: Sequelize.STRING(255), allowNull: false },
  description: { type: Sequelize.STRING(255), allowNull: false },
  isActive: { type: Sequelize.BOOLEAN, allowNull: false },
});

SubjectEntity.belongsTo(StandardEntity,{
  as: 'SubjectStandardId',
  foreignKey: 'standardId',
  allowNull: false
})

module.exports = SubjectEntity;
