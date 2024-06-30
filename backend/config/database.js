const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './config/movies_db.sqlite'
});

module.exports = sequelize;