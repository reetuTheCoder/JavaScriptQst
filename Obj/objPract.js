let obj = { a: 10, b: 20, c: 30 };
let objVal = [];
for (const key in obj) {
  objVal.push(obj[key]);
}
console.log(objVal);

console.log(Object.values(obj));

console.log(
  Object.entries(obj).map(([key, val]) => {
    return `${key} : ${val}`;
  })
);

console.log(
  Object.keys(obj).map((key) => ({
    key: key,
    values: obj[key],
  }))
);

let obj1 = { name: "reetu", city: "delhi" };

let keys = Object.keys(obj1);
console.log(keys);

let newArr = [];
for (const key of keys) {
  let newKeys = key.toUpperCase();

  newArr.push([newKeys, obj1[key]]);
}

let newObj = Object.fromEntries(newArr);
console.log("newArr", newObj);

let obj2 = { username: "reetu", password: "1234", role: "admin" };

let arrOfObj = [];
for (const key in obj2) {
  if (key !== "password") {
    arrOfObj.push([key, obj2[key]]);
  }
}

console.log("arrOfObj", arrOfObj);
let removePass = Object.fromEntries(arrOfObj);
console.log("removePass", removePass);

let user = { name: "reetu", age: 16 };

user.country = "India";

console.log("user", user);
let trsfObj = { a: 10, b: "hi", c: 20, d: true };
let data = [];

for (const key in trsfObj) {
  if (typeof trsfObj[key] === "number") {
    data.push([key, trsfObj[key]]);
  }
}

console.log(Object.fromEntries(data));

let newObj1 = { a: 2, b: 4, c: 6 };

let arr = [];
for (const key in newObj1) {
  arr.push(newObj1[key]);
}
console.log("arr", arr.map((ele) => ele * 2));
