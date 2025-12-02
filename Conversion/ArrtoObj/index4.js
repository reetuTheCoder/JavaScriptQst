let arr = [
  ["a", 10],
  ["b", 20],
  ["c", 30],
];
let arrObj = {};
arr.forEach(([ele, index]) => {
  // console.log(ele,"index",index);
   arrObj[ele] = index;
});

console.log(arrObj);



// Q8 — Group by age

let users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 20 },
];

let obj = {};
users.forEach((user) => {
  if (!obj[user.age]) {
    obj[user.age] = [];
  }
  obj[user.age].push(user.name);
});
console.log(obj);

//Q9 — Convert array of objects into object count by category

let items = [
  { type: "fruit", item: "apple" },
  { type: "fruit", item: "banana" },
  { type: "veg", item: "carrot" },
];

let gropCate = {};

items.forEach((ele) => {
  if (!gropCate[ele.type]) {
    gropCate[ele.type] = 0;
  }
  gropCate[ele.type] = (gropCate[ele.type] || 0) + 1;
});

console.log(gropCate);
