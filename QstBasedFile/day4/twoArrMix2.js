// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let aIndx = 0;
// let target = 5;

// let newArr = [];

// let befIndex = a.indexOf(3);
// // console.log(befIndex);

// for (let i = 0; i < a.length; i++) {
//   if (i === befIndex) {
//     for (let j = 0; j < b.length; j++) {
//       if (b[j] === target) {
//         newArr.push(b[j]);
//       }
//     }
//   }
//   newArr.push(a[i]);
// }

// console.log(newArr);






/// add taget value on the before evry 3rd


let a = [1, 3, 2, 3, 3];

let b = [4, 5, 6];

let aIndx = 0;
let target = 5;

let newArr = [];

let targetIndex = null;

for (let i = 0; i < b.length; i++) {
  if (b[i] === target) {
    targetIndex = b[i];
    break
  }
  //   newArr.push(a[i]);
}


for (let j = 0; j < a.length; j++) {
    if (a[j] === 3 && targetIndex !== null) {
       newArr.push(targetIndex);
    }
    newArr.push(a[j]);
}

console.log(newArr);
console.log(targetIndex);





/// add taget value on the last esond third


// let a = [1, 3, 2, 3, 3];
// let b = [4, 5, 6];
// let target = 5;

// let newArr = [];
// let count = 0;

// // find target value from b
// let targetValue = b.find(x => x === target);

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === 3) {
//     count++;
//     if (count === 2 && targetValue !== undefined) {
//       newArr.push(targetValue); // insert before 2nd 3
//     }
//   }
//   newArr.push(a[i]);
// }

// console.log(newArr);

