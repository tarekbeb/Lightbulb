'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('skills', 
    [
      {
        skillName: 'Coding'
      },
      {
        skillName: 'Web Analytics'
      },
      {
        skillName: 'UI Design'
      },
      {
        skillName: 'Network Security'
      },
      {
        skillName: 'Project Planning'
      },
      {
        skillName: 'Digital Media'
      },
      {
        skillName: 'Photography'
      },
      {
        skillName: 'Task Management'
      },
      {
        skillName: 'Benchmarking'
      },
      {
        skillName: 'Server Adminstration'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('skills', null, {});
  }
};
