const genre = (sequelize, DataTypes) => {
  const Genre = sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Genre.associate = models => {
    Genre.hasMany(models.Story)
  }

  return Genre
}

export default genre
