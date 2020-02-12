var express = require('express');

var server = express();

// https://localhost:3000/
server.get('/',(request, response) => {
    response.send('Hello World!')
});

server.listen(3333);