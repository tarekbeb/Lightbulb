'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projectSkills', {
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'project',
          key: 'id'
        }
      },
      skillsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'skills',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projectSkills');
  }
};