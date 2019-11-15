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
    return queryInterface.bulkInsert('images', [
      {
        page: 1,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/002.jpg',
        episode: 1,
      },
      {
        page: 2,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/003.jpg',
        episode: 1,
      },
      {
        page: 3,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/004.jpg',
        episode: 1,
      },
      {
        page: 4,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/006.jpg',
        episode: 1,
      },
      {
        page: 5,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/007.jpg',
        episode: 1,
      },
      {
        page: 6,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/008.jpg',
        episode: 1,
      },
      {
        page: 7,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/009.jpg',
        episode: 1,
      },
      {
        page: 8,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/010.jpg',
        episode: 1,
      },
      {
        page: 9,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/011.jpg',
        episode: 1,
      },
      {
        page: 10,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/012.jpg',
        episode: 1,
      },
      {
        page: 11,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/013.jpg',
        episode: 1,
      },
      {
        page: 12,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/014.jpg',
        episode: 1,
      },
      {
        page: 13,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/015.jpg',
        episode: 1,
      },
      {
        page: 14,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/016.jpg',
        episode: 1,
      },
      {
        page: 15,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/017.jpg',
        episode: 1,
      },
      {
        page: 16,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/018.jpg',
        episode: 1,
      },
      {
        page: 17,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/019.jpg',
        episode: 1,
      },
      {
        page: 18,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/020.jpg',
        episode: 1,
      },
      {
        page: 19,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/021.jpg',
        episode: 1,
      },
      {
        page: 20,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5db398670aed6/a4f16eadb4073825187a21a3102af750/022.jpg',
        episode: 1,
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
    return queryInterface.bulkDelete('images', null, {});
  },
};
