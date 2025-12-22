let a = [1, 2, 3];
let b = [4, 5, 6];

let aIndx = 0;

let bIndx = 0;

let newArr = [];




/// pick 1 1 ele from both array



// while (aIndx < a.length || bIndx < b.length) {
//   if (aIndx < a.length) {
//     newArr.push(a[aIndx++]);
//   }
//   if (bIndx < b.length) {
//     newArr.push(b[bIndx++]);
//   }
// }

// console.log(newArr);

/// pick 2 2 ele from both array

let twoEleArr = [];

while (aIndx < a.length || bIndx < b.length) {
  for (let i = 0; i < 2 && aIndx < a.length; i++) {
    twoEleArr.push(a[aIndx++]);
  }

  for (let i = 0; i < 2 && bIndx < b.length; i++) {
    twoEleArr.push(b[bIndx++]);
  }
}

console.log(twoEleArr);
