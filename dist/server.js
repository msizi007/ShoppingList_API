"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const items_1 = require("./routes/items");
const PORT = 3001;
const server = http_1.default.createServer((req, res) => {
    var _a;
    if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith("/items")) {
        (0, items_1.itemsRoute)(req, res);
        return;
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Not found" }));
    }
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
