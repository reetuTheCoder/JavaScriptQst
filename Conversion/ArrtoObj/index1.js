// Q11. Convert an array of transactions into an object grouped by category.

let transactions = [
  { id: 1, amount: 200, category: "food" },
  { id: 2, amount: 500, category: "travel" },
  { id: 3, amount: 100, category: "food" },
  { id: 4, amount: 300, category: "shopping" },
  { id: 5, amount: 150, category: "travel" },
];

let groupedByCat = {};

transactions.forEach((item) => {
  let categ = item.category;

  if (!groupedByCat[categ]) {
    groupedByCat[categ] = [];
  }
  groupedByCat[categ].push(item);
});

// console.log(groupedByCat);

let products = [
  { name: "Shirt", price: 500, category: "clothing" },
  { name: "Jeans", price: 1200, category: "clothing" },
  { name: "Apple", price: 100, category: "grocery" },
  { name: "Milk", price: 50, category: "grocery" },
  { name: "Laptop", price: 50000, category: "electronics" },
];

let groupedByCatPrice = {};

products.forEach((item) => {
  let categ = item.category;
  if (!groupedByCatPrice[categ]) {
    groupedByCatPrice[categ] = 0;
  }
  groupedByCatPrice[categ] += item.price;
});

console.log(groupedByCatPrice);

let orders = [
  {
    id: 1,
    customer: "Alice",
    items: [
      { name: "Shirt", price: 500, quantity: 2 },
      { name: "Jeans", price: 1200, quantity: 1 },
    ],
  },
  {
    id: 2,
    customer: "Bob",
    items: [
      { name: "Shirt", price: 500, quantity: 1 },
      { name: "Milk", price: 50, quantity: 3 },
    ],
  },
  {
    id: 3,
    customer: "Alice",
    items: [{ name: "Laptop", price: 50000, quantity: 1 }],
  },
];

let totalPrice = {};

orders.forEach((order) => {
  let usernames = order.customer;
  // console.log(order.customer.items.price);

  if (!totalPrice[usernames]) {
    totalPrice[usernames] = 0;
  }
  order.items.forEach((item) => {
    // console.log("itemitem", item.price);
    let netPrice = item.price * item.quantity;
    // console.log("net", netPrice);

    totalPrice[usernames] += netPrice;
  });
});

// console.log(totalPrice);

let neworders = [
  {
    id: 1,
    customer: "Alice",
    items: [
      { name: "Shirt", price: 500, quantity: 2 },
      { name: "Jeans", price: 1200, quantity: 1 },
    ],
  },
  {
    id: 2,
    customer: "Bob",
    items: [
      { name: "Shirt", price: 500, quantity: 1 },
      { name: "Milk", price: 50, quantity: 3 },
    ],
  },
  {
    id: 3,
    customer: "Alice",
    items: [{ name: "Laptop", price: 50000, quantity: 1 }],
  },
  {
    id: 4,
    customer: "Bob",
    items: [
      { name: "Book", price: 300, quantity: 2 },
      { name: "Pen", price: 20, quantity: 5 },
    ],
  },
  {
    id: 5,
    customer: "Charlie",
    items: [{ name: "Bag", price: 2000, quantity: 1 }],
  },
];

let convObj = {};

neworders.forEach((order) => {
  // console.log(item.customer);
  let custName = order.customer;

  if (!convObj[custName]) {
    convObj[custName] = {
      totalSpent: 0,
      itemsBought: [],
    };
  }
  order.items.forEach((item) => {
    let itemName = item.name;
     let netPrice = item.price * item.quantity;

    convObj[custName].itemsBought.push(itemName);
    convObj[custName].totalSpent += netPrice
  });
});

console.log("convObjconvObj", convObj);
