let arr = [
  ["name", "Reetu"],
  ["age", 16],
  ["city", "Delhi"],
];

let newObj = Object.fromEntries(arr);
console.log("objj", newObj);

let arrObj = [
  { key: "name", value: "Reetu" },
  { key: "age", value: 16 },
];

let newObj1 = []

arrObj.map((ele)=> {
  newObj1.push([ele.key, ele.value])
  
})
let backtoObj = Object.fromEntries(newObj1)
console.log(backtoObj);

let obj1 = { a: 1, b: 2 }
let obj2 = { b: 20, c: 30 }

let merge = Object.assign({}, obj2, obj1)
// const merge = { ...obj2, ...obj1 };
console.log("merge", merge);
