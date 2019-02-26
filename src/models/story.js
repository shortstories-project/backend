const story = (sequelize, DataTypes) => {
  const Story = sequelize.define('story', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [4000, 40000],
      },
    },
  })

  Story.associate = models => {
    Story.belongsTo(models.User)
    Story.hasMany(models.Comment, { onDelete: 'cascade', hooks: true })
    Story.hasMany(models.Reaction, { onDelete: 'cascade', hooks: true })
    Story.hasMany(models.View, { onDelete: 'cascade', hooks: true })
  }

  return Story
}

export default story
