'use strict';
module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define('skills', {
    skillName: DataTypes.STRING,
  }, {timestamps: false,
    freezeTableName: true});
  skills.associate = function(models) {
    // associations can be defined here
    models.project.belongsToMany(models.skills, {through: models.projectSkills, foreignKey: 'projectId'});
    models.user.belongsToMany(models.skills, {through: models.userSkills})
  };
  return skills;
};