const http = require("http");

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost"); // парсимо URL

  // ROOT ROUTE
  if (req.method === "GET" && url.pathname === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Manual HTTP Router");
    return;
  }

  // TIME ROUTE
  if (req.method === "GET" && url.pathname === "/time") {
    const data = { now: new Date().toISOString() };
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
    return;
  }

  // ECHO ROUTE
  if (req.method === "GET" && url.pathname === "/echo") {
    const msg = url.searchParams.get("msg") || "";
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(msg);
    return;
  }

  // SUM ROUTE
  if (req.method === "GET" && url.pathname === "/sum") {
    const aRaw = url.searchParams.get("a");
    const bRaw = url.searchParams.get("b");
    const a = Number(aRaw);
    const b = Number(bRaw);

    if (aRaw !== null && bRaw !== null && !Number.isNaN(a) && !Number.isNaN(b)) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ sum: a + b }));
    } else {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Invalid numbers" }));
    }
    return;
  }

  // Необроблені маршрути
  res.statusCode = 404;
  res.end("Not found");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});