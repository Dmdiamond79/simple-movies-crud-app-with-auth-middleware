'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
    }
  }

  Movie.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Set id as the primary key
      autoIncrement: true // If it's an auto-incrementing primary key
    },
    title: DataTypes.STRING,
    genres: DataTypes.STRING,
    year: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });

  return Movie;
};
c