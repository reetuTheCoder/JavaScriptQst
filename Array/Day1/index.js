let color = ["red", "green", "pink"];

////1 Find the index of an item using findIndex() Write code to return the index of the first color whose length is greater than 4.
let firstColor = color.findIndex((colo) => colo.length > 4);

// console.log(firstColor);

////2 Use some() and every() properly
//// Does the array contain any color with length 4?
//// Are ALL items strings?
let someProp = color.some((ele) => ele.length === 4);
// console.log(someProp);

let allItems = color.every((ele) => typeof ele === "string");
// console.log(allItems);

////3 Advanced chaining  Convert every color to uppercase, then sort them, then return only the first two — all in one chain.
let convertColor = color
  .map((ele) => ele.toUpperCase())
  .sort()
  .slice(0, 2);
// console.log(convertColor);

////4 Remove single item using splice() without mutating the original
let removeSingle = color.slice().splice(0, 1);
console.log("removeSingle ", removeSingle);
console.log("original ", color);

////5 How to deep clone nested arrays

let nestedArr = ["red", ["green", "light-green"], "pink"];

let clonedArr = structuredClone(nestedArr);
console.log("clonedArr", clonedArr);

////6 Remove falsy values
let arr = ["red", "", null, "green", undefined, "pink"];

let newArr = arr.filter(Boolean);

console.log(newArr);

////7 Flatten array with .flat()

let nestedArr1 = ["red", ["green", ["pink"]]];

console.log(nestedArr.flat(Infinity));


////8 Use reduce to reverse an array (no reverse()) Reverse array using only .reduce().

// it is not good for porfomance 
let reverseArr = color.reduce((acc, val) => {
  acc.unshift(val);

  return acc;
}, []);
console.log(reverseArr);
