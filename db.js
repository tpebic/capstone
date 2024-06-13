const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log("DB INITIALIZING")
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    dialectOptions: {
        connectTimeout: 60000 // 60 seconds
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to the MySQL database.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;