### Shopping List API

![ShoppingList_API](https://socialify.git.ci/msizi007/ShoppingList_API/image?language=1&owner=1&name=1&stargazers=1&theme=Light)

###### Installation Setup

1. Clone the project using the command:

```bash
git clone https://github.com/msizi007/ShoppingList_API.git
```

2. Install all necessary packages

```bash
npm install
```

3. Run the server

```bash
npm run dev
```

4. Use any application/extension of your choice to test the API

```
- Thunder Client
- Postman
- Curl (CLI)
```

###### API Methods

```bash
* GET
  - http://localhost:3000/items
  - http://localhost:3000/items/1
* POST
  - http://localhost:3000/items
  BODY:
  {
    "name": "Eggs",
    "quantity": 22,
    "price": 2.99,
    "isPurchased": true
  }
- PUT
  - http://localhost:3000/items/1
  BODY:
  {
    "name": "Milk",
    "quantity": 22,
    "price": 2.99,
    "isPurchased": true
  }
- PATCH
  - http://localhost:3000/items/1
  BODY:
  {
    "isPurchased": false
  }
```

###### Tech Stack

- Http (Nodejs) using nodemon
