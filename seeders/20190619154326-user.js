'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user',
    [
      {
        fName: 'Alfie',
        lName: 'Santos',
        email: 'alfisantos@mail.com',
        username: 'AlfieS',
        password: '123456',
        imgURL: '',
        bio: 'Alfie Santos, Web development and UI design',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fName: 'Tarek',
        lName: 'Al Beb',
        email: 'tarekbeb@mail.com',
        username: 'TarekB',
        password: '1123581321',
        imgURL: '',
        bio: 'Tarek specializing in networks and database',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fName: 'Michael',
        lName: 'Dao',
        email: 'michaeldao@mail.com',
        username: 'michaelD',
        password: '1qaz2wsx',
        imgURL: '',
        bio: 'Michael is working with javascript and user security',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fName: 'Chris',
        lName: 'Humphrey',
        email: 'chrishumphrey@mail.com',
        username: 'ChrisH',
        password: 'zaq1xsw2',
        imgURL: '',
        bio: 'Chris is using cutting edge technology to create responsive apps',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
