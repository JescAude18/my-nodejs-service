const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, world!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found!');
    }
});

server.listen(3000);
