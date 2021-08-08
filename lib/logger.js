const Loggly = require('winston-loggly-bulk').Loggly;
const winston = require('winston');

const config = {
    token:  process.env.LOGGLY_TOKEN || '',
    subdomain: process.env.NODE_ENV || 'localhost',
    tags: [process.env.TAG || 'development']
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new Loggly(config),
        new winston.transports.Console({ level: 'info' }),
    ],
});

module.exports = logger;