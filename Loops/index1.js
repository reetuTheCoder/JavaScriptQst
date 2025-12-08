let arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  let row = "";
  // console.log("row", row);
  for (let j = 0; j <= i; j++) {
    row += arr[j] + " ";
  }

  console.log("row", row);
}

for (let i = arr.length; i > 0; i--) {
  let row = "";
  //   console.log("row", row);

  for (let j = 0; j < i; j++) {
    row += arr[j] + " ";
  }
  console.log("row1111", row);
}

// “Count How Many Numbers Have At Least 1 Duplicate”
let arr1 = [1, 2, 3, 1, 4, 2, 5];

let uniq = [];
let duplicateVal = 0;

for (let i = 0; i < arr1.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniq.length; j++) {
    if (arr1[i] === uniq[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate) {
    continue;
  }

  let count = 0;

  for (let k = 0; k < arr1.length; k++) {
    if (arr1[i] === arr1[k]) {
      count++;
    }
  }

  if (count > 1) {
    duplicateVal++;
  }

  uniq.push(arr1[i]);
}

console.log("Total numbers having duplicates =", duplicateVal);

// For every value that appears more than once, print all its indexes.
let arr2 = ["a", "b", "a", "c", "b"];

let duplicatesEle = [];

for (let i = 0; i < arr2.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < duplicatesEle.length; j++) {
    if (arr2[i] === duplicatesEle[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate) {
    continue;
  }

  let indexCount = [];

  for (let k = 0; k < arr2.length; k++) {
    if (arr2[i] === arr2[k]) {
      indexCount.push(k);
    }
  }

  if (indexCount.length > 1) {
    console.log(arr2[i], "indexCount", indexCount);
  }

  duplicatesEle.push(arr2[i]);
}

let arr3 = [1, 2, 1, 3, 2, 4, 1];

let dupEle = [];

for (let i = 0; i < arr3.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < dupEle.length; j++) {
    if (arr3[i] === dupEle[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate) {
    continue;
  }

  let countIndex = [];

  for (let k = 0; k < arr3.length; k++) {
    if (arr3[i] === arr3[k]) {
      countIndex.push(k);
    }
  }

  //   console.log("countIndex",countIndex);

  if (countIndex.length > 1) {
    console.log(arr3[i], ">>>>>>>>", countIndex);
  }

  dupEle.push(arr3[i]);
}

// Find all pairs with difference = 2

let arr4 = [1, 3, 0, 5, 7, 9];

let target = 2;

for (let i = 0; i < arr4.length; i++) {
  for (let j = i + 1; j < arr4.length; j++) {
    let diff = arr4[j] - arr4[i];
    // console.log("diff", diff);

    if (diff === target || diff === -target) {
      console.log(arr4[i], arr4[j]);
    }
  }
}

let arr5 = [4, 6, 8, 10, 12];
let targetNum = 4;

for (let i = 0; i < arr5.length; i++) {
  for (let k = i + 1; k < arr5.length; k++) {
    let diff = arr5[k] - arr5[i];


    if (diff === targetNum || diff === -targetNum) {
        console.log("mini PRACTICE",arr5[i], arr5[k]);
        
    }
  }
}



