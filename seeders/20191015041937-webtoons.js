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
        title: 'Perfect Half',
        genre: 'Action, Romance',
        description: 'Once a world ruled by men, women stand up and fight to become men’s equal. Now, in a land that is equally divided up between man and woman, the batter rages on.',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Perfect-Half-cover.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Perfect-half-title-correct.jpg',
        created_by: 1,
      },
      {
        title: 'Solo Leveling',
        genre: 'Action',
        description: 'A low rank hunter gets strange ability that let him continuously level up unlike other hunters. How far can he level up? Can he become the most powerful hunter of the whole world!?',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Solo-cover_result_result.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Solo-Leveling.jpg',
        created_by: 2,
      },
      {
        title: "Lilith's Cord",
        genre: 'Action, Fantasy, Romance',
        description: "The current generation of humans are often said to be called descendants of Adam and Eve. However, there lies a small number of a different type of humans in this world. Children of the one who is called to be Adam's first Eve - Lilith. Her children look completely the same as Eve's descendants, and the few who live among us... are still somewhere in the world.",
        fav_count: 0,
        cover:
          'https://pm1.narvii.com/6423/c1099a7137a521c9685f3475596ca3ef731a715d_hq.jpg',
        image:
          'http://postfiles3.naver.net/20160626_34/juderland_1466924213290Heosh_JPEG/%C1%A6%B8%F1re.jpg?type=w2',
        created_by: 1,
      },
      {
        title: "The Devil's Descendants",
        genre: 'Drama, Action, Fantasy',
        description: 'I have the cursed skill that lets me know who the criminals are. It’s my job to get rid of them from this world.',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/DD_result-new.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Devils-Descendants.jpg',
        created_by: 2,
      },
      {
        title: 'Delivery Knight',
        genre: 'Action, Fantasy',
        description: 'While most people avoid the suffocating pollution covering the world… Deliverymen press on, so the citizens can get the packages they desperately need. They are known… as the Delivery Knights!',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Delivery-knight-cover.png',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Delivery-Knight-title.jpg',
        created_by: 2,
      },
      {
        title: 'Love Square',
        genre: 'Drama, Romance',
        description: 'A private beach in the Summer heat is a good day to have an affair. Can they resist the temptations? Will they remain faithful?',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Love-Squer-cover.png',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Love-square-title.png',
        created_by: 1,
      },
      {
        title: "Yuri's Part Time Job",
        genre: 'Drama, School Life',
        description: 'Yuri is the perfect college student, so no one suspects she’s living a double life at night. Until Professor Baek finds out about her secret part-time job.',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Yuris-part-time-job.png',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Yuris-perfect-Married-life.jpg',
        created_by: 1,
      },
      {
        title: 'Raid',
        genre: 'Action, Fantasy',
        description: 'Around 50 years ago, after the Korean War, Demon World Gates appeared abruptly all over the world. Through the Gates, Demon creatures appeared. These otherworldly beings, utterly impervious to modern weaponry, rained destruction across the world.',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Raid-Coverc.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Raid-Title.jpg',
        created_by: 2,
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
