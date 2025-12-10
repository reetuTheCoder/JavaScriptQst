// Move all zeroes to the end (stable order)

// let arr = [0, 0, 0, 3, 12];

// let arr = [1, 1, 1, 3, 12];

let arr = [1, 2, 3, 4, 4, 5, 6];

let zeroCount = 0;
let targetMove = 4;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== targetMove) {
    let temp = arr[zeroCount];
    // console.log(temp);

    arr[zeroCount] = arr[i];
    arr[i] = temp;

    zeroCount++;
  }
}

console.log("arr", arr);

// i want to move 3 and 12 at the starting of the array like [3, 12, 1, 2, 4]
let arr1 = [1, 2, 3, 12, 4];
let netPost = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === 3 || arr1[i] === 12) {
//     let temp = arr1[netPost];
//     arr1[netPost] = arr1[i];
//     arr1[i] = temp;

//     netPost++;
//   }
// }

// console.log("arr111", arr1);
let moveValues = [3, 12, 4];

for (let i = 0; i < arr1.length; i++) {
  if (moveValues.includes(arr1[i])) {
    let temp = arr1[netPost];
    arr1[netPost] = arr1[i];
    arr1[i] = temp;

    netPost++;
  }
}
console.log("arr111--------", arr1);

let arr2 = [1, 2, 3, 4, 5, 6, 4];

let moveEle = 4;

let posCount = 0;
let targetMoveEle = 4;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === targetMoveEle) {
    let temp = arr2[posCount];
    // console.log(temp);

    arr2[posCount] = arr2[i];
    arr2[i] = temp;

    posCount++;
  }
}

console.log("arr2-----", arr2);

let arr3 = [1, 2, 3, 4, 5, 12, 11];

let items = [];
let targets = [12, 11];

for (let i = 0; i < arr3.length; i++) {
  if (targets.includes(arr3[i])) {
    items.push(arr3[i]);
    arr3.splice(i, 1);
    i--;
  }
}

let insertIndex = arr3.indexOf(4);
arr3.splice(insertIndex, 0, ...items);

console.log( "arr3----------------", arr3);
