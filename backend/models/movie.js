const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  _id: {
    type: DataTypes.STRING(8),
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(56),
    allowNull: false,
  },
  vote_average: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  vote_count: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  date: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  runtime: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(316),
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  categorie: {
    type: DataTypes.STRING(199),
    allowNull: true,
  },
  production_companys: {
    type: DataTypes.STRING(139),
    allowNull: true,
  },
  languages: {
    type: DataTypes.STRING(83),
    allowNull: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'movies',
  timestamps: false, // assuming your table doesn't have `createdAt` and `updatedAt` fields
});

module.exports = Movie;
