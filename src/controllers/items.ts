import { Item } from "../types/items";

let items: Item[] = [
  {
    id: 1,
    name: "Milk",
    quantity: 1,
    price: 2.99,
    isPurchased: true,
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
  isPurchased: boolean,
): Item => {
  const newItem: Item = {
    id: idCounter++,
    name,
    quantity,
    price,
    isPurchased,
  };
  items.push(newItem);
  return newItem;
};

export const updateItem = (id: number, updatedItem: Item): Item | undefined => {
  items.map((item: Item) => {
    if (item.id === id) {
      item.name = updatedItem.name;
      item.quantity = updatedItem.quantity;
      item.price = updatedItem.price;
      item.isPurchased = updatedItem.isPurchased;
    }
  });
  return items.find((item) => item.id === id);
};

export const deleteItem = (id: number): boolean => {
  const numItems = items.length;

  items = items.filter((item) => item.id !== id);

  // If the length is different, something was deleted
  return items.length !== numItems;
};

export const patchItem = (id: number, updatedItem: Item): Item | undefined => {
  items.map((item: Item) => {
    if (item.id === id) {
      item.name = updatedItem.name || item.name;
      item.quantity = updatedItem.quantity || item.quantity;
      item.price = updatedItem.price || item.price;
      item.isPurchased = item.isPurchased =
        updatedItem.isPurchased ?? item.isPurchased;
    }
  });
  return items.find((item) => item.id === id);
};
