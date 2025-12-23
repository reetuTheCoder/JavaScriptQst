const users = [
  { id: 1, name: "Ravi", role: "admin" },
  { id: 2, name: "Amit", role: "user" },
  { id: 3, name: "Neha", role: "admin" },
  { id: 4, name: "Pooja", role: "user" },
  { id: 5, name: "Karan", role: "manager" },
];

let freq = {};
let group = {};
for (const user of users) {
  //   console.log(user.role);

  if (!group[user.role]) {
    group[user.role] = [];
  }
  group[user.role].push(user);
}

// console.log(group);

const products = [
  { id: 1, name: "Mobile", category: "Electronics" },
  { id: 2, name: "Laptop", category: "Electronics" },
  { id: 3, name: "Chair", category: "Furniture" },
  { id: 4, name: "Table", category: "Furniture" },
];

let uniqueEle = {};

let unique = [];
for (const product of products) {
  console.log(product.category);

  if (!uniqueEle[product.category]) {
    uniqueEle[product.category] = true;
    unique.push(product);
  }
}

console.log(unique);
