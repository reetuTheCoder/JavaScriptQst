// let arr = [0, 2, 1, 2, 0, 1, 0];
let arr = [1, 0, 1, 1, 0, 0, 1];

let low = 0;
let mid = 0;
let high = arr.length - 1;
console.log(high);

while (mid <= high) {
  if (arr[mid] === 0) {
    [arr[low], arr[mid]] = [arr[mid], arr[low]];
    low++;
    mid++;
  } else if (arr[mid] === 1) {
    mid++;
  } else {
    [arr[mid], arr[high]] = [arr[high], arr[mid]];
    high--;
  }
}

console.log(arr);

let arr1 = [0, 1, 0, 3, 12];

let newArr = [];

let countZero = 0;
// try to push zero at end
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 0) {
    countZero++;
  } else {
    newArr.push(arr1[i]);
  }
}

for (let j = 0; j < countZero; j++) {
  newArr.push(0);
}

// try to push zero at start

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === 0) {
//     newArr.push(0);
//   }
// }

// for (let j = 0; j < arr1.length; j++) {
//   if (arr1[j] !== 0) {
//     newArr.push(arr1[j]);
//   }
// }
console.log(countZero, newArr);


// push [3,12] at start of arry

let target = [3, 12]

let output = []

for (let i = 0; i < arr1.length; i++) {
   
    if (arr1[i] === target) {
        output.push(arr1[i])
    }
    
}

// console.log("output", output);

