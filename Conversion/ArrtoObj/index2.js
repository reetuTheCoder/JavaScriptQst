// Q1. Group Products by Brand

let products = [
  { name: "iPhone", brand: "Apple" },
  { name: "MacBook", brand: "Apple" },
  { name: "Galaxy S22", brand: "Samsung" },
  { name: "Note 10", brand: "Samsung" },
];

let objByBrand = {};
for (const item of products) {
  // console.log(item.brand);
  let brandN = item.brand;
  let nameP = item.name;

  if (!objByBrand[brandN]) {
    objByBrand[brandN] = [];
  }
  objByBrand[brandN].push(nameP);
}

console.log(objByBrand);

// Q2. Count Employees per Department
let employees = [
  { name: "A", dept: "HR" },
  { name: "B", dept: "Tech" },
  { name: "C", dept: "Tech" },
  { name: "D", dept: "Sales" },
];
let objByDep = {};

for (const dep of employees) {
  let dept_N = dep.dept;
  if (!objByDep[dept_N]) {
    objByDep[dept_N] = 0;
  }
  objByDep[dept_N] += (dept_N[dep] || 0) + 1;
}

console.log(objByDep);

// Q4. Create Object With User Details Using ID as Key

let users = [
  { id: 101, name: "Alice", age: 22 },
  { id: 102, name: "Bob", age: 25 },
  { id: 103, name: "Charlie", age: 28 },
];

let objByUserId = {};

for (const ids of users) {
  objByUserId[ids.id] = {
    name: "",
    age: 0,
  };
  objByUserId[ids.id].name = ids.name;
  objByUserId[ids.id].age = ids.age;
}

console.log(objByUserId);

// Q8. Group Orders by City

let orders = [
  { id: 1, city: "Delhi" },
  { id: 2, city: "Mumbai" },
  { id: 3, city: "Delhi" },
  { id: 4, city: "Pune" },
];

orderByCity = {};

orders.forEach((order) => {
 if (!orderByCity[order.city] ) {
  orderByCity[order.city]  = []
 } 

  orderByCity[order.city].push(order.id);
});

console.log(orderByCity);
