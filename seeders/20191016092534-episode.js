'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/10/Solo-Leveling-175x238.jpg',
        webtoon: 1,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/springtime-for-blossom-title-175x238.jpg',
        webtoon: 2,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Ashen-title-175x238.png',
        webtoon: 3,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Broken-Melody-175x238.png',
        webtoon: 4,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/rugal-title1-175x238.png',
        webtoon: 5,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Scone-sweet-title-175x238.jpg',
        webtoon: 6,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('episodes', null, {});
  },
};
