'use strict';
module.exports = (sequelize, DataTypes) => {
  const userSkills = sequelize.define('userSkills', {
    userID: DataTypes.INTEGER,
    skillsID: DataTypes.INTEGER
  }, {timestamps: false,
    freezeTableName: true});
  userSkills.associate = function(models) {
    // associations can be defined here
  };
  return userSkills;
};