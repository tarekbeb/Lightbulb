'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectSkills = sequelize.define('projectSkills', {
    projectId: DataTypes.INTEGER,
    skillsId: DataTypes.INTEGER
  }, {timestamps: false,
    freezeTableName: true});
  projectSkills.associate = function(models) {
    // associations can be defined here
  };
  return projectSkills;
};