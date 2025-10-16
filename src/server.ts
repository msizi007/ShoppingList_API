import http from "http";
import { itemsRoute } from "./routes/items";

const PORT = 3001;

const server = http.createServer((req, res) => {
  if (req.url?.startsWith("/items")) {
    itemsRoute(req, res);
    return;
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
