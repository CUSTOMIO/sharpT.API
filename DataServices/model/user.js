const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const {
  CourseEntity,
  SubjectEntity,
  UserPersonalEntity,
  StandardEntity } = require("./models");


const UserEntity = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  phoneNumber: { type: Sequelize.BIGINT, allowNull: false},
  password: {type: Sequelize.CHAR(60), allowNull: false}
});

//#region UserPersonal


// UserEntity.hasMany(UserPersonalEntity,{
//   as: 'userPersonalCreatedBy',
//   foreignKey: 'createdBy',
//   allowNull: false
// });

// UserEntity.hasMany(UserPersonalEntity,{
//   as: 'userPersonalUpdatedBy',
//   foreignKey: 'updatedBy',
//   allowNull: true
// });

//#endregion

//#region  Course
UserEntity.hasMany(CourseEntity,{
  as: 'courseCreatedBy',
  foreignKey: 'createdBy',
  allowNull: false
});

UserEntity.hasMany(CourseEntity,{
  as: 'courseUpdatedBy',
  foreignKey: 'updatedBy',
  allowNull: true
});
//#endregion

//#region Subject
UserEntity.hasMany(SubjectEntity,{
  as: 'subjectCreatedBy',
  foreignKey: 'createdBy',
  allowNull: false
});

UserEntity.hasMany(SubjectEntity,{
  as: 'subjectUpdatedBy',
  foreignKey: 'updatedBy',
  allowNull: true
});
//#endregion

//#region standard
UserEntity.hasMany(StandardEntity, {
  as: 'standardCreatedBy',
  foreignKey: 'createdBy',
  allowNull: false
});

UserEntity.hasMany(StandardEntity,{
  as: 'standardUpdatedBy',
  foreignKey: 'updatedBy',
  allowNull: true
});

//#endregion

//#region User
UserEntity.hasMany(UserEntity,{
  as: 'userCreatedBy',
  foreignKey: 'createdBy',
  allowNull: false
});

UserEntity.hasMany(UserEntity,{
  as: 'userpdatedBy',
  foreignKey: 'updatedBy',
  allowNull: true
});
//#endregion

module.exports = UserEntity;
