const Sequelize = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Entity1 = require('./entity1')(sequelize, Sequelize);
db.Entity2 = require('./entity2')(sequelize, Sequelize);
db.Entity3 = require('./entity3')(sequelize, Sequelize);


module.exports = db;
