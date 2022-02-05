module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      userID: 1,
      categoryID: 1,
      title: 'Концерт Ранетки.Возвращение',
      description: 'ищу участника для посещений концерта своей любимой группы',
      location: 'ДК Ленсовета',
      privateSettings: 'Для всех',
      dateTime: '13 февраля',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userID: 2,
      categoryID: 2,
      title: 'Поездка в репино',
      description: 'Kто со мной?',
      location: 'Репино',
      privateSettings: 'Для друзей',
      dateTime: '14 февраля',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userID: 3,
      categoryID: 3,
      title: 'Сходить в кино',
      description: 'пойду в кино один',
      location: 'Каро на Лиговском',
      privateSettings: 'Для себя',
      dateTime: '15 февраля',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userID: 4,
      categoryID: 4,
      title: 'Поход в баню',
      description: 'Хочу пойти в баню, в которой Балабанов снимал филь "Я тоже хочу"',
      location: 'ДК Ленсовета',
      privateSettings: 'Для всех',
      dateTime: '16 февраля',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userID: 5,
      categoryID: 5,
      title: 'Поход в кальян',
      description: 'Пошлите',
      location: ' "Феромон" на Подъяческой',
      privateSettings: 'Для друзей',
      dateTime: '17 февраля',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userID: 6,
      categoryID: 6,
      title: 'Пробежка в парке',
      description: 'Попытка начать здоровый образ жизни',
      location: 'в центре',
      privateSettings: 'Для себя',
      dateTime: '18 февраля',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};