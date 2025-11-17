let color = ["red", "green", "pink", "red", "green"];

// first way
let checkAllStr = color.every((ele) => typeof ele === "string");
// console.log(checkAllStr);

// second way
let allAreStr = true;
for (const ele of color) {
  if (typeof ele !== "string") {
    allAreStr = false;
  }
}

console.log(allAreStr);

////2 Create an object from the array

//first way
let makeObj = { ...color };

// console.log(makeObj);

//second way

let secWay = Object.assign({}, color);
console.log(secWay);

//third way

let thirdWay = color.reduce((acc, val, index) => {
  acc[index] = val;
  return acc;
}, {});

console.log("thirdWay", thirdWay);
