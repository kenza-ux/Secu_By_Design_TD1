
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
require('dotenv').config() 

const User = sequelize.define('User', {
  firstname:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:false,
  },
  lastname:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  movies_rented:{
    type: DataTypes.STRING,
    allowNull: false
  }
},{tableName:"users",
  timestamps:false,
}
);

module.exports = User;
