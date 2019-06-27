'use strict';
module.exports = (sequelize, DataTypes) => {
  const industry = sequelize.define('industry', {
    industryName: DataTypes.STRING
  }, {timestamps: false,
    freezeTableName: true});
  industry.associate = function(models) {
    models.industry.hasMany(models.project, {foreignKey: 'industryID'})
  };
  return industry;
};