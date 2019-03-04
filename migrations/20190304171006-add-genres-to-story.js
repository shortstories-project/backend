module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('stories', 'genreId', Sequelize.INTEGER);
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('stories', 'genreId');
  },
}
