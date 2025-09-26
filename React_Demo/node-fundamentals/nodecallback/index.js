const http = require('http'); //To create the server.
const fs = require('fs'); //To read the file.

// Create a server
const server = http.createServer((req, res) => {
 const url = req.url;
 const method = req.method;

 // Check if the URL is /readfile and the method is GET
 if (url === '/readfile' && method === 'GET') {
 // Read the file.txt using a callback
 fs.readFile('file.txt', (err, data) => {
 if (err) {
 // If there's an error, send a 500 response
 res.statusCode = 500; //sets the status code to 500, indicating an internal server error.
 res.setHeader('Content-Type', 'text/plain'); //sets the Content-Type header to text/plain, indicating that the response body will be plain text.
 res.end('Error reading file'); //sends the plain text message 'Error reading file' to the client and ends the response. This message informs the client about the nature of the error.
 return;
 }

 // If there's no error, send the file content
 res.statusCode = 200; //sets the status code to 200, indicating that the request was successfully processed.
 res.setHeader('Content-Type', 'text/plain'); //sets the Content-Type header to text/plain, indicating that the response body will be plain text.
 res.end(data.toString()); //converts the data (which is usually a buffer containing the file content) to a string and sends it as the response body. This ensures that the client receives the content of the file in plain text format.
 });
 } else {
 // For other routes, send a 404 response
 res.statusCode = 404; //This line sets the HTTP response status code to 404, indicating that the requested resource was not found.
 res.setHeader('Content-Type', 'text/plain'); //This line sets the Content-Type header of the HTTP response to text/plain, indicating that the response body will be plain text.
 res.end('Not Found'); //This line ends the HTTP response and sends the string "Not Found" as the response body to the client.
 }
});

// Start the server on port 3000
const port = 3000;
server.listen(port, () => {
 console.log(`Server running at http://localhost:${port}/`);
});