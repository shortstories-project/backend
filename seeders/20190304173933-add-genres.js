module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'genres',
      [
        {
          name: 'Детективы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Фантастика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Боевики',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Фэнтези',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Приключения',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Юмор',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ужасы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Из жизни',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '18+',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('genres', null, {})
  },
}
