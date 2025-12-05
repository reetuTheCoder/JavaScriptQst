// Q1 — Find all duplicate pairs

let arr = [1, 2, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] === arr[j]) {
      console.log(arr[i], arr[j]);
    }
  }
}

let duplicateCount = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] === arr[j]) {
      duplicateCount++;
    }
  }
}

console.log("duplicateCount ", duplicateCount);

let arr1 = ["a", "b", "a", "c", "b"];

let uniqeEle = [];

for (let i = 0; i < arr1.length; i++) {
  if (uniqeEle.includes(arr1[i])) {
    console.log("arr1[i]", arr1[i]);
    continue;
  }
let feqCount = 0;
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      feqCount++;
    }
  }
  uniqeEle.push(arr1[i]);
  console.log(arr1[i], "->", feqCount);
}

let arr2 = [5, 1, 4, 2];

let sortArr = [];
// for (let i = 0; i < arr2.length; i++) {
//     const element = arr2[i];

//     console.log(i,"elee", element);

//     for (let j = i; j < arr2.length; j++) {
//       const newEl = arr2[j];

//       console.log(j,"newEl", arr2[j]);

//       if (element >newEl) {
//          sortArr.push(element)
//       }

//     }

// }

// console.log("sortArr  ", sortArr);
