const sequelize = require('./config/database');
const User = require('./models/user');

const testConnection = async () => {
  try {
    await User.sync()  
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

testConnection();
