import { IncomingMessage, ServerResponse } from "http";
import { getItems, getItemById, addItem } from "../controllers/items";
import { log } from "console";

// http:localhost:3001/items/1

export const itemsRoute = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith("/items")) {
    const urlParts = req.url.split("/");

    const id = urlParts[2] ? parseInt(urlParts[2]) : undefined;

    // http:localhost:3001/items
    if (req.method === "GET" && !id) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(getItems()));
      return;
    }

    // http:localhost:3001/items/:id
    if (req.method == "GET" && id) {
      if (getItems().length <= 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Item Not found" }));
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(getItemById(id)));
      return;
    }

    // http:localhost:3001/items [POST]
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const { name, quantity, price, isPurchased } = JSON.parse(body);

        if (!name || typeof name !== "string") {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Name is required" }));
          return;
        }

        if (!quantity || typeof quantity !== "number") {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Quantity is required" }));
          return;
        }

        if (!price || typeof price !== "number") {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Price is required" }));
          return;
        }

        if (
          typeof isPurchased === "undefined" ||
          typeof isPurchased !== "boolean"
        ) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "isPurchased is required" }));
          return;
        }
        const newItem = addItem(name, quantity, price, isPurchased);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newItem));
      });
    }
  }
};
