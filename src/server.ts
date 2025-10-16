import http from "http";

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello, world!" }));
  return;
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
