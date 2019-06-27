'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {freezeTableName: true});
  user.associate = function(models) {
    // associations can be defined here
    models.project.belongsToMany(models.user, {through: models.userProject, foreignKey: 'projectID'});
    models.skills.belongsToMany(models.user, {through: models.userSkills})
  };
  return user;
};