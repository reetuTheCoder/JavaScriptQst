let obj = { a: 10, b: 50, c: 30 };
let keys = "";
for (const key in obj) {
  if (key === "b") {
    keys += key;
  }
}

console.log("keys", keys);

let obj1 = { a: 1, b: 2 };
let arr = [];
for (const key in obj1) {
  let val = obj1[key];

  arr.push([val, key]);
}
console.log(Object.fromEntries(arr));

let obj3 = { a: "x", b: "y", c: "x" };

let freq = {};

for (const key in obj3) {
  const val = obj3[key];
  freq[val] = (freq[val] || 0) + 1;
}
console.log(freq);

let objdata = { a: 10, b: 20, c: 10, d: 20 };
let group = {};
for (const key in objdata) {
  const val = objdata[key];

  console.log(val);

  if (!group[val]) {
    group[val] = [];
  }
  group[val].push(key)
}

console.log(group);
