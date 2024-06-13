const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        dialectOptions: {
            connectTimeout: 60000 // 60 seconds timeout
        }
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        dialectOptions: {
            connectTimeout: 60000 // 60 seconds timeout
        }
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        dialectOptions: {
            connectTimeout: 60000 // 60 seconds timeout
        }
    },
};