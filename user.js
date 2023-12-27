module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    User.hasMany(sequelize.models.Entity1, { as: 'Entity1', foreignKey: 'userId' });
  
    return User;
  };
  
