module.exports = (sequelize, Sequelize) => {
    const Entity3 = sequelize.define('Entity3', {
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
    Entity3.belongsTo(sequelize.models.User, { foreignKey: 'userId' });
  
    return Entity3;
  };
  
