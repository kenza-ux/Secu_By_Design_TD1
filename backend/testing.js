const sequelize = require('./config/database');
const Movie = require('./models/movie');

const testConnection = async () => {
  try {
    await Movie.sync()
    const moviesList = await Movie.findAll({
      limit: 10
    });
    console.log('Movies:', moviesList);
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

testConnection();
