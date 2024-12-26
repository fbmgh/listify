const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected...');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

connectToDatabase();

module.exports = sequelize;
