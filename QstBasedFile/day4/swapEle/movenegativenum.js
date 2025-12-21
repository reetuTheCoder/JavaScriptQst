// Move all negative numbers to the left

let arr = [1, -2, 3, -4, -1];

let index = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  // console.log("arr[i] > 0", arr[i] < 0);
  if (arr[i] < 0) {
    newArr[index++] = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArr[index++] = arr[i];
  }
}

console.log(arr);
console.log(newArr);

/// Partition array around a pivot
let arry = [9, 12, 3, 5, 14, 10, 10];

let pivot = 10;
let result = [];
let idx = 0;

for (let i = 0; i < arry.length; i++) {
  if (arry[i] < pivot) {
    //  console.log(arry[i]);
    result[idx++] = arry[i];
  }
}

for (let i = 0; i < arry.length; i++) {
  if (arry[i] === pivot) {
    //  console.log(arry[i]);
    result[idx++] = arry[i];
  }
}

for (let i = 0; i < arry.length; i++) {
  if (arry[i] > pivot) {
    //  console.log(arry[i]);
    result[idx++] = arry[i];
  }
}
console.log(result);

/// Rearrange array so that all 1s come before 0s

let array = [0, 1, 1, 0, 1, 0];

let ind = 0;
let output = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 1) {
    output[ind++] = array[i];
  }
}

while (ind < array.length) {
  output[ind++] = 0;
}
console.log(output);
