const Loggly = require('winston-loggly-bulk').Loggly;
const winston = require('winston');

const config = {
    token:  process.env.LOGGLY_TOKEN || 'c7078879-7da4-45e4-a782-cb56e49562bc',
    subdomain: process.env.NODE_ENV || 'heroku',
    tags: [process.env.TAG || 'heroku']
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