// Q10 — Print This Star Pattern Using Nested Loops

for (let i = 1; i <= 4; i++) {
  let star = "";

  for (let j = 0; j < i; j++) {
    star += "*";
  }

  console.log("strr", star);
}

// Q12 — Find Indexes of Duplicate Values

let arr = ["a", "b", "a", "c", "b"];

let freq = {};
for (let i = 0; i < arr.length; i++) {
  // console.log(i,"arr", arr[i]);

  if (freq[arr[i]]) {
    freq[arr[i]]++;
  } else {
    freq[arr[i]] = 1;
  }
}

let keys = [];
for (const key in freq) {
  if (freq[key] > 1) {
    keys.push(key);
  }
}

let obj = {};

for (let j = 0; j < keys.length; j++) {
  const ele = keys[j];

  obj[ele] = [];

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === ele) {
      obj[ele].push(k);
    }
  }
}

for (const key in obj) {
  console.log(key, ">>>>>>>>>", obj[key]);
}

console.log("freq", freq);
console.log("keys", keys);
console.log("obj", obj);

// Q1 — Print Upper Triangle of Matrix

let arr1 = [1, 2, 3, 4];

for (let i = 0; i < arr1.length; i++) {
  let triangle = "";

  for (let j = i; j < arr1.length; j++) {
    triangle += arr1[j] + " ";

    // console.log("triangletriangle", triangle);
  }
  console.log("triangle", triangle);
}

// Q2 — Print Lower Triangle

for (let i = arr1.length - 1; i >= 0; i--) {
  let triangle = "";

  for (let j = i; j < arr1.length; j++) {
    triangle += arr1[j] + " ";

    // console.log("triangletriangle", triangle);
  }
  console.log("triangle1111111111111111", triangle);
}

// Q4 — Find All Pairs With Difference = 2

let arr2 = [1, 3, 5, 7, 9];

let target = 2;
let storepair = [];
for (let i = 0; i < arr2.length; i++) {
  const firstEle = arr2[i];

  for (let j = i; j < arr2.length; j++) {
    const secEle = arr2[j];

    // console.log(firstEle,"fhghf", secEle);

    if (secEle - firstEle === target || firstEle - secEle === target) {
      console.log("hey reetu");

      storepair.push(firstEle + " " + secEle);
    }
  }
}

for (const key of storepair) {
  console.log(key);
}

// Q6 — Find First Repeating Element (Using Only Loops)

let arr3 = [5, 1, 2, 3, 2, 4, 5];

let firstRep = null;

for (let i = 0; i < arr3.length; i++) {
  for (let j = i + 1; j < arr3.length; j++) {
    if (arr3[i] === arr3[j]) {
      firstRep = arr3[i];
      break;
    }
  }
  if (firstRep !== null) {
    break;
  }
}

console.log("firstRep", firstRep);

// Q9 — Count How Many Numbers Have At Least 1 Duplicate

let arr4 = [1, 2, 3, 1, 4, 2, 5,];

let uniq = [];
let duplicateVal = 0

for (let i = 0; i < arr4.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniq.length; j++) {
    if (arr4[i] === uniq[j]) {

      // console.log("arr4[i] === uniq[j]", arr4[i] , uniq[j]);
      
      isDuplicate = true;
      duplicateVal ++
      break;
    }
  }
  if (!isDuplicate) {
    uniq.push(arr4[i]);
  }
}

console.log("Total numbers having duplicates =", duplicateVal);


//Q12 — Find Indexes of Duplicate Values