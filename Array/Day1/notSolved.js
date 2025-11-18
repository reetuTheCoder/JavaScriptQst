let color = ["red", "green", "pink", "purple", "gold"];



//// Convert array into a Map

let convertMap = new Map(color.map((ele, index) => [index, ele]))


console.log(convertMap);



//// Convert array to object using destructuring
const [first, second, third]  = color
let obj = {first, second, third}
console.log(obj);




/// let arr  = ["red", "", null, "green", undefined, "pink"]

// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//         newArr.push(arr[i])
//     }
    
// }
// console.log("newArr  :", newArr);



//// Use reduce to reverse an array (no reverse()) Reverse array using only .reduce().


// this way is best for all 
let reverseArr = color.reduce((acc, val, i, arr) => {
    // console.log("i value ",i);
    
  acc[arr.length - 1 - i] = val;
  return acc;
}, []);

console.log(reverseArr);
