'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    pName: DataTypes.STRING,
    description: DataTypes.STRING,
    summary: DataTypes.STRING,
    industryID: DataTypes.INTEGER
  }, {freezeTableName: true});
  project.associate = function(models) {
    // associations can be defined here
    models.skills.belongsToMany(models.project, {through: models.projectSkills, foreignKey: 'skillsId'});
    models.user.belongsToMany(models.project, {through: models.userProject, foreignKey: 'userID'})
    models.project.belongsTo(models.industry, {foreignKey: 'industryID'})
  };
  return project;
};