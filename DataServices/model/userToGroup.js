const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const GroupEntity = require("./group");
const { UserEntity } = require("./models");

const UserToGroupEntity = sequelize.define("UserToGroup", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

UserToGroupEntity.belongsTo(UserEntity, {
    as: 'UserToGroup_userId',
    foreignKey: 'userId',
    allowNull: false

})
UserToGroupEntity.belongsTo(GroupEntity, {
    as: 'UserToGroup_groupId',
    foreignKey: 'groupId',
    allowNull: false

})


module.exports = UserToGroupEntity;
