const http = require('http');

const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello, World!\nHow are you?\nWelcome to Node.js fundamentals. \n');
});

const port = 3000;
server.listen(port, () => {
 console.log(`Server running at http://localhost:${port}/`);
});