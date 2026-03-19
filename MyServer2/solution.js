const http = require("http");

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Manual HTTP Router");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});