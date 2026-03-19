const http = require("http");

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Manual HTTP Router");
    return;
  }

  if (req.method === "GET" && req.url.startsWith("/time")) {
    const data = { now: new Date().toISOString() };
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
    return;
  }

  if (req.method === "GET" && req.url.startsWith("/echo")) {
    const url = new URL(req.url, "http://localhost"); // потрібно для парсингу query
    const msg = url.searchParams.get("msg") || "";
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(msg);
    return;
  }

  res.statusCode = 404;
  res.end("Not found");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});