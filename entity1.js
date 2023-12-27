module.exports = (sequelize, Sequelize) => {
    const Entity1 = sequelize.define('Entity1', {
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
    Entity1.belongsTo(sequelize.models.User, { foreignKey: 'userId' });
  
    return Entity1;
  };
  
