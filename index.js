// includes
const express = require("express");

// our lovely server
const app = express();

// the port we listen on
const PORT = process.env.PORT || 8000;

// rest calls
app.get('/api', (request, response) => {
   res.json({
       message: 'Hello world',
   }) ;
});

// catch all for web content
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});