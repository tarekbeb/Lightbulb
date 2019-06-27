'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('project', 
      [
        {
          pName: 'Self Driving Cars',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore.',
          summary: 'A car that drives itself',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pName: 'Flying Cars',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore.',
          summary: 'A car that flies',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pName: 'Swimming Cars',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          summary: 'A car that swims',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('project', null, {});
  }
};
