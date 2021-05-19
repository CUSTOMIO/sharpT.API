const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");
const {  StandardEntity } = require("./models");
const UserEntity = require('./user')

const UserPersonalEntity = sequelize.define("UserPersonal", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: { type: Sequelize.STRING(255), allowNull: false },
  middleName: { type: Sequelize.STRING(255), allowNull: false },
  lastName: { type: Sequelize.STRING(255), allowNull: false },
  institute: { type: Sequelize.STRING(255), allowNull: false },
  studentPN: { type: Sequelize.BIGINT, allowNull: false},
  parentPN: { type: Sequelize.BIGINT, allowNull: false},
  isVerified: { type: Sequelize.BOOLEAN, allowNull: false},
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    foreignKey: true,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
});

UserPersonalEntity.belongsTo(StandardEntity,{
  as: 'coursesStandardId',
  foreignKey: 'standardId',
  allowNull: true
})


UserEntity.hasOne(UserPersonalEntity,{
  foreignKey: 'userId'
});

UserPersonalEntity.belongsTo(UserEntity,{ 
  foreignKey: 'userId',
})


module.exports = UserPersonalEntity;
