const http = require("http");

const PORT = 3000;

/**
 * Creates an HTTP server that responds with a plain text message.
 * The server sends a 200 OK status and the message "Hello nodejs from http module"
 * for every incoming request.
 *
 * @param {http.IncomingMessage} req - The incoming request object.
 * @param {http.ServerResponse} res - The response object used to send data back to the client.
 * @returns {http.Server} The created HTTP server instance.
 */
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello nodejs from http module");
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
