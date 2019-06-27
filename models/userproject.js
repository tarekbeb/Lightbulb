'use strict';
module.exports = (sequelize, DataTypes) => {
  const userProject = sequelize.define('userProject', {
    userID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER
  }, {timestamps: false,
    freezeTableName: true});
  userProject.associate = function(models) {
    // associations can be defined here
  };
  return userProject;
};