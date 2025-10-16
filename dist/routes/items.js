"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRoute = void 0;
const items_1 = require("../controllers/items");
const console_1 = require("console");
// http:localhost:3001/items/1
const itemsRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith("/items")) {
        const urlParts = req.url.split("/");
        const id = urlParts[2] ? parseInt(urlParts[2]) : undefined;
        // http:localhost:3001/items
        if (req.method === "GET" && !id) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify((0, items_1.getItems)()));
            return;
        }
        // http:localhost:3001/items/:id
        if (req.method == "GET" && id) {
            if ((0, items_1.getItems)().length <= 0) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Item Not found" }));
                return;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify((0, items_1.getItemById)(id)));
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
                (0, console_1.log)(typeof isPurchased, isPurchased);
                if (typeof isPurchased == "undefined" ||
                    typeof isPurchased !== "boolean") {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "isPurchased is required" }));
                    return;
                }
                const newItem = (0, items_1.addItem)(name, quantity, price, isPurchased);
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newItem));
            });
        }
    }
});
exports.itemsRoute = itemsRoute;
