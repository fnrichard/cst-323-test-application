// includes
const express = require('express');
const path = require('path');
const fs = require('fs');
const User = require('./lib/model/user');
const logger = require('./lib/logger');

// our lovely server
const app = express();

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    logger.info(`normalizePort called with ${val}`);
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


// allow us to parse body posts
app.use(express.json());

// cors issue fix
app.use(require('cors')());

// rest calls
app.post('/api/users/new', (request, response) => {
    const params = {
        username: request.body.username,
        password: request.body.password,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
    };
    logger.info('POST /api/users/new called');
    User.create(params)
        .then(() => {
            logger.info('user creation successful')
            response.json({message: 'ok'})
        })
        .catch((error) => {
            logger.error(error);
            response.json({ message: error })
        });
});

app.get('/api/users/:id', async (request, response) => {
    logger.info(`GET /api/users/${request.params.id} called`);
    return response.json(await User.findByPk(Number(request.params.id)));
});

app.put('/api/users/:id', async (request, response) => {
    logger.info(`PUT /api/users/${request.params.id} called`);
    const user = await User.findByPk(Number(request.params.id));
    const {
        firstName = user.firstName,
        lastName = user.lastName,
        password = user.password,
    } = request.body;
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;
    await user.save();

    return response.json(user);
});

app.get('/api/users', async (request, response) => {
    logger.info('GET /api/users called');
    return response.json(await User.findAll());
});

// async await makes more sense here
app.post('/api/login', async (request, response) => {
    logger.info('POST /api/login called');
    const user = await User.findOne({ where: { username: request.body.username, password: request.body.password } });
    if (user) {
        logger.info('successful login');
        return response.json({message: 'ok'});
    }
    logger.info('unsuccessful login');
    response.status(404).send('Not found');
});

// catch all for web content
app.get('*', (request, response) => {
    logger.info(`GET ${request.url} called`);
    if (!request.url.includes('../') && !request.url.includes('./')) {
        const file = request.url === '/' || (!request.url.includes('.js') && !request.url.includes('.css') && !request.url.includes('.ico'))
            ? 'index.html'
            : request.url;
        let contentType = 'text/html';
        if (request.url.includes('.css')) {
            contentType = 'text/css';
        } else if (request.url.includes('.js')) {
            contentType = 'text/javascript';
        }
        response.setHeader('content-type', contentType);
        const data = fs.readFileSync(path.resolve(__dirname, './client/build', `./${file}`));
        return response.send(data);
    }
    return response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(port, () => {
    logger.info(`Example app listening at http://localhost:${port}`)
})