'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('industry',
    [
      {
        industryName: 'Oil & Gas'
      },
      {
        industryName: 'Real Estate'
      },
      {
        industryName: 'IT'
      },
      {
        industryName: 'Investment'
      },
      {
        industryName: 'Marketing'
      },
      {
        industryName: 'Health'
      },
      {
        industryName: 'Education'
      },
      {
        industryName: 'Retail'
      },
      {
        industryName: 'Transportation'
      },
      {
        industryName: 'Regulations'
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('industry', null, {});
  }
};
