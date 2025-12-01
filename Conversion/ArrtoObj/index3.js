// Q1. Convert this array into an object where value becomes key

let arr = ["apple", "banana", "orange"];

let convtObj = {};

arr.forEach((item, index) => {
  convtObj[item] = index;
});
console.log(convtObj);

// Q2. Convert this object into an array of only values

let obj = { a: 10, b: 20, c: 30 };

let objInArr = Object.values(obj);

console.log(objInArr);

// Q3. Convert array of objects → object grouped by category

let data = [
  { item: "apple", category: "fruit" },
  { item: "banana", category: "fruit" },
  { item: "carrot", category: "veg" },
];

let gropCate = {};

data.forEach((ele) => {
  if (!gropCate[ele.category]) {
    gropCate[ele.category] = [];
  }
  gropCate[ele.category].push(ele.item);
});

console.log(gropCate);

// Q4 — Convert this array into an object counting frequency

let arr1 = ["a", "b", "a", "c", "b", "a"];

let freq = {};
for (const items of arr1) {
  freq[items] = (freq[items] || 0) + 1;
}
console.log(freq);

// Q5 — Convert object into an array of objects

let obj1 = { a: 1, b: 2, c: 3 };

let newArr = [];
for (const item in obj1) {
  newArr.push({ key: item, value: obj1[item] });
}

console.log("newArr", newArr);

// Q6 — Convert array of objects into object using "id" as key

let users = [
  { id: 101, name: "A" },
  { id: 102, name: "B" },
  { id: 103, name: "C" },
];

let objById = {};

users.forEach((user) => {
  objById[user.id] = user;
});

console.log("objById--------------", objById);
