let color = ["red", "green", "pink"];

////1. Use destructuring to extract value How do you extract "red" into firstColor and the rest into remainingColors using array destructuring?

// let [firstColor, ...remainingColors] = color
// console.log(firstColor);
// console.log(remainingColors);

////2.  Swap two values in the array

console.log("original", color);
// first way
// [color[0], color[2]] = [color[2], color[0]]
// console.log("after swap",color);

// second way
const i = 0;
const j = 2;

// [color[i], color[j]] = [color[j], color[i]];

// console.log(color);

////3 If you want to swap ALL elements in the array

// first way
// console.log(color.reverse());

// second way
for (let i = 0, j = color.length - 1; i < j; i++, j--) {
  [color[i], color[j]] = [color[j], color[i]];
}
// console.log(color);

////4 Convert array into key-value pairs Using .entries(), how do you convert the array into:

let createInObj = color.entries();

for (const ele of createInObj) {
  console.log(ele);
}

////5 Find the total number of characters Use .reduce() to get the total number of characters in all colors combined.

let newVal = color.reduce((acc, val) => {
  return acc + val.length;
}, 0);
console.log("newVal", newVal);

////6 Create a frequency map Using .reduce(), how do you create this:
let newColor = ["red", "pink", "green", "red", "pink", "pink"];

let ferq = {};
for (const col of newColor) {
  ferq[col] = (ferq[col] || 0) + 1;
}

// console.log("newColor ferq :", ferq);

let ferqVal = newColor.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

// console.log("ferqVal", ferqVal);

////7 Flatten nested arrays

let nestedArr = ["red", ["green", "light-green"], "pink"];

console.log(nestedArr.flat(Infinity));



