// let a = [1, 2, 3, 4];
// let b = [5, 6, 3, 4];

let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];


// first way
// let equal = true;

// if (a.length !== b.length) {
//   equal = false;
// } else {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       equal = false;
//       break;
//     }
//   }
// }

// console.log(equal);


/// second way


let isEqual = a.length === b.length && a.sort().every((ele, index) => ele === b.sort()[index])

console.log(isEqual);
