const ws = require('ws');
const server = new ws.Server({ port: '3000' });

server.on('connection', socket);
console.log('hi');