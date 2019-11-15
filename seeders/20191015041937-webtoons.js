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
    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'Solo Leveling',
        genre: 'Action',
        description: 'A low rank hunter gets strange ability that let him continuously level up unlike other hunters. How far can he level up? Can he become the most powerful hunter of the whole world!?',
        fav_count: 0,
        cover:
          'https://getmanhwa.co/wp-content/uploads/2019/10/Solo-cover_result_result.jpg',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/10/Solo-Leveling-175x238.jpg',
        created_by: 2,
      },
      {
        title: 'Springtime for Blossom',
        genre: 'Drama, School Life',
        description: 'Blossom is the prettiest girl in school, and she wants to live at my house! Has springtime finally come for me at last?',
        fav_count: 0,
        cover:
        'https://getmanhwa.co/wp-content/uploads/2019/10/Springtime-cover.jpg',  
        image:
        'https://getmanhwa.co/wp-content/uploads/2019/11/springtime-for-blossom-title-175x238.jpg',
        created_by: 1,
      },
      {
        title: 'The Ashen Snowfield',
        genre: 'Action, Fantasy',
        description: "The world didn’t end with a bang. It was a flash of light bookended by a long, endless freeze that covered the landscape is white snow. Kindness and compassion were replaced with struggle and the ruthless will to survive. And then, there are the Ashen.",
        fav_count: 0,
        cover:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Ashen-cover.png',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Ashen-title-175x238.png',
        created_by: 2,
      },
      {
        title: 'Broken Melody',
        genre: 'Romance',
        description: 'Minhee used to be a world-famous piano prodigy until one mistake sent her life spiraling. Her confidence shaken, her family broken and her life in ruins, all she can do is hope for a chance to make things better.',
        fav_count: 0,
        cover:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Broken-Melody-cover.png',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Broken-Melody-175x238.png',
        created_by: 1,
      },
      {
        title: 'Rugal',
        genre: 'Action, Sci-Fi',
        description: 'Just when he lost everything he gains something extraordinary. The revenge of the cop who lost everything.',
        fav_count: 0,
        cover:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Rugal-cover.png',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/rugal-title1-175x238.png',
        created_by: 2,
      },
      {
        title: 'Scone Sweet Scone',
        genre: 'Drama, Romance',
        description: 'Sydney runs into the boy who made fun of her weight all those years ago. Why is he being so nice after all these years?',
        fav_count: 0,
        cover:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Scone-sweet-cover.png',
        image:
          'https://getmanhwa.co/wp-content/uploads/2019/11/Scone-sweet-title-175x238.jpg',
        created_by: 1,
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
    return queryInterface.bulkDelete('webtoons', null, {});
  },
};
