const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'testdb',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || 'abc@123',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: (...msg) => console.log(msg),
    },
);

module.exports = sequelize;