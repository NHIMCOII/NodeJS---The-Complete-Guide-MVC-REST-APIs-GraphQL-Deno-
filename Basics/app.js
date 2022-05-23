const http = require('http');

const routes = require('./routes');

// const { parse } = require('path');


const server = http.createServer(routes.handler);

server.listen(3000);