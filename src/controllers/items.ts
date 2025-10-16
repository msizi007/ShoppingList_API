import { Item } from "../types/items";

let items: Item[] = [
  {
    id: 1,
    name: "Milk",
    quantity: 1,
    price: 2.99,
    status: "Available",
  },
];
let idCounter = 2;

export const getItems = (): Item[] => {
  return items;
};

export const getItemById = (id: number): Item | undefined => {
  return items.find((item) => item.id === id);
};

export const addItem = (
  name: string,
  quantity: number,
  price: number,
  status: string
): Item => {
  const newItem: Item = {
    id: idCounter++,
    name,
    quantity,
    price,
    status,
  };
  items.push(newItem);
  return newItem;
};
