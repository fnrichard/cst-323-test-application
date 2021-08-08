const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'defaultdb',
    process.env.DB_USER || 'doadmin',
    process.env.DB_PASS || 'pw',
    {
        host: process.env.DB_HOST || 'db-mysql-nyc3-82804-do-user-821082-0.b.db.ondigitalocean.com',
        port: process.env.DB_PORT || 25060,
        dialect: 'mysql',
        logging: (...msg) => console.log(msg),
    },
);

module.exports = sequelize;