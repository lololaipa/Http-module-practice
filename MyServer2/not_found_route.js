const http = require("http");

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");

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
    const aParam = url.searchParams.get("a");
    const bParam = url.searchParams.get("b");

    if (aParam === null || bParam === null) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Invalid numbers" }));
      return;
    }

    const a = Number(aParam);
    const b = Number(bParam);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Invalid numbers" }));
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ sum: a + b }));
    return;
  }

  // NOT FOUND ROUTE
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});