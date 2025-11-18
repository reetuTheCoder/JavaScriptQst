////1 Find the total number of characters Use .reduce() to get the total number of characters in all colors combined.
let color = ["red", "green", "pink"];

let newVal = color.reduce((acc, val) => {
  return acc + val.length;
}, 0);
// console.log("newVal", newVal);

////6 Create a frequency map Using .reduce(), how do you create this:
let newColor = ["red", "pink", "green", "red", "pink", "pink"];

let ferqVal = newColor.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log("ferqVal", ferqVal);

const nestedLevelArr = [
  "red",
  123,
  true,
  null,
  undefined,
  ["green", "light-green"],

  {
    name: "Magic Chat",
    count: 42,
    nested: {
      a: 1,
      b: { x: 10 },
    },
  },

  new Date("2025-11-17"),

  new Map([
    ["key1", "value1"],
    ["key2", { deep: "value" }],
  ]),

  new Set([1, 2, 3, "abc"]),

  /hello/gi,

  BigInt(9999999999999n),

  new Uint8Array([5, 10, 15]),

  new ArrayBuffer(8),
];

let flatArr = structuredClone(nestedLevelArr);

console.log("flatArr  :", flatArr);

/// important note -  What structuredClone() does not support
// Functions -	 Not serializable
// DOM nodes -	Browser-specific, non-serializable
// Symbols -	Unique, unserializable
// WeakMap / WeakSet -	References uncloneable
// Objects with custom prototypes	- Prototype lost

const nestedLevelArr1 = [
  "red",
  123,
  true,
  null,
  undefined,
  ["green", "light-green"],

  {
    name: "Magic Chat",
    count: 42,
    nested: {
      a: 1,
      b: { x: 10 },
    },
  },

  new Date("2025-11-17"),

  new Map([
    ["key1", "value1"],
    ["key2", { deep: "value" }],
  ]),

  new Set([1, 2, 3, "abc"]),

  /hello/gi,

  //   BigInt(9999999999999n),

  new Uint8Array([5, 10, 15]),

  new ArrayBuffer(8),
];
const copy = JSON.parse(JSON.stringify(nestedLevelArr1));

console.log("copy  :", copy); // it is not fully cloned

/// important note -  JSON.parse(JSON.stringify only can clone
// str , number, null , arr, plan obj, booleans

const arr = [1, 2, 3];

let freezArry = Object.freeze(arr);

// freezArry.psuh(4) // it will not work because we freezour array

//// Make the array read-only

console.log(color);

// first way
let makeArrReadOnly = Object.freeze(color);
//  makeArrReadOnly.push("yellow") // it will not work

// second way

obj = {
  _color: Object.freeze(["red", "green", "pink"]),

  get color() {
    return this._color;
  },
};
console.log(obj.color);
obj.color.push("blue") // it will not work