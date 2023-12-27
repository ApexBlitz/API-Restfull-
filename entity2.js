module.exports = (sequelize, Sequelize) => {
    const Entity2 = sequelize.define('Entity2', {
      attribute1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      attribute2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    // Association avec User
    Entity2.belongsTo(sequelize.models.User, { foreignKey: 'userId' });
  
    return Entity2;
  };
  
