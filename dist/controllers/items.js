"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = exports.getItemById = exports.getItems = void 0;
let items = [
    {
        id: 1,
        name: "Milk",
        quantity: 1,
        price: 2.99,
        isPurchased: true,
    },
];
let idCounter = 2;
const getItems = () => {
    return items;
};
exports.getItems = getItems;
const getItemById = (id) => {
    return items.find((item) => item.id === id);
};
exports.getItemById = getItemById;
const addItem = (name, quantity, price, isPurchased) => {
    const newItem = {
        id: idCounter++,
        name,
        quantity,
        price,
        isPurchased,
    };
    items.push(newItem);
    return newItem;
};
exports.addItem = addItem;
