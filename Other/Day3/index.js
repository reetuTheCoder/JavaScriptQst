let color = ["red", "green", "pink"];

let newColor = [...color, "blue"];
// console.log("newColor",newColor);
// console.log("color",color);

let afterGreenRemove = color.filter((ele) => ele !== "green");
console.log("afterGreenRemove", afterGreenRemove);

// let index = color.indexOf("green");
// let removeColor = color.slice(index, 1);
// console.log(color);

//// Check for duplicates
let color1 = ["red", "green", "pink", "red", "yellow"];

let duplicate = false;
let freq = {};

for (const col of color1) {
  freq[col] = (freq[col] || 0) + 1;

  if (freq[col] > 1) {
    duplicate = true;
  }
}

console.log(duplicate);

//// Merge two arrays and remove duplicates
let merge = color.concat(color1);

let unq = [...new Set(merge)];
console.log(unq);

//// Find the longest color name
let longest = unq.reduce(
  (acc, val) => (acc.length > val.length ? acc : val),
  []
);
console.log(longest);

//// Filter colors by length

let moreThenThree = unq.filter((colo) => colo.length > 3);
console.log(moreThenThree);


///// Convert the array into an object where the key is the color name and value is the length of the string:
let objVal = unq.reduce((acc, val) => {
  acc[val] = val.length;
  return acc;
}, {});

console.log(objVal);


//// Chain multiple array methods In a single chain, convert all colors to uppercase and filter only the colors that start with "P".
let singleChain = unq.map((ele) => ele.toUpperCase()).filter((ele) => ele.startsWith("P"))

console.log(singleChain);



/// Use .map() to convert all colors into an object like:

let convertInObj = unq.map((ele) => ({
  color : ele,
  lenght: ele.length
}))
console.log("convertInObj ", convertInObj);
