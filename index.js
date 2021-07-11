// includes
const express = require('express');
const path = require('path');
const fs = require('fs');
const User = require("./lib/model/user");

// our lovely server
const app = express();

// the port we listen on
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
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
    User.create(params)
        .then(() => response.json({message: 'ok'}))
        .catch((error) => response.json({ message: error }));
});

app.get('/api/users/:id', async (request, response) => {
    return response.json(await User.findByPk(Number(request.params.id)));
});

app.put('/api/users/:id', async (request, response) => {
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
    return response.json(await User.findAll());
});

// async await makes more sense here
app.post('/api/login', async (request, response) => {
    const user = await User.findOne({ where: { username: request.body.username, password: request.body.password } });
    if (user) {
        return response.json({message: 'ok'});
    }
    response.status(404).send('Not found');
});

// catch all for web content
app.get('*', (request, response) => {
    console.log(new Date(), request.url);
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
    console.log(`Example app listening at http://localhost:${port}`)
})