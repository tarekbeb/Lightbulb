'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      industryID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'industry',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('project');
  }
};