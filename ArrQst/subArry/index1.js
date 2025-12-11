// Q8. Count subarrays whose sum = given target

let arr = [1, 2, 1, 1];
let target = 3;

let output = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let sum = 0;
    let subarr = [];

    for (let k = i; k <= j; k++) {
      subarr.push(arr[k]);
      sum += arr[k];
    }
    // console.log(sum, "--sum-- --subarr--", subarr);

    if (sum === target) {
      count++;
      output.push(subarr);
    }
  }
}
// console.log(output, "subarr---count", count);

// [1]
// [1,2] = 3
// [1,2,1]
// [1,2,1,1]
// [2]
// [2,1]
// [2,1,1]
// [1]
// [1,1]
// [1]

// Q9. Find the smallest subarray with sum >= target
let sm_arr = [2, 3, 1, 2, 4, 3];
let sm_target = 7;

// [2]
// [2,3]
// [2,3,1]
// [2,3,1,4]
// [2,3,1,3]
// [3,]
// [3,1]
// [3,1,2]
// [3,1,2,4]
// [3,1,2,4,3]
// [1,]
// [1,2]
// [1,2,4]
// [1,2,4,3]
// [4,]
// [4,3] == 7
// [3]

let smallestArr = [];
let smLen = Infinity;

for (let i = 0; i < sm_arr.length; i++) {
  for (let j = i; j < sm_arr.length; j++) {
    let sum = 0;
    let subA = [];

    for (let k = i; k <= j; k++) {
      subA.push(sm_arr[k]);
      sum += sm_arr[k];
    }
    // console.log(subA, "sumsum", sum);
    if (sum === sm_target) {
      let subLength = subA.length;

      if (subLength < smLen) {
        smLen = subLength;
        smallestArr = subA;
      }
    }
  }
}

// console.log(smallestArr, "smLen", smLen);

// Q10. Print all palindromic subarrays

let pali_arr = [1, 2, 2, 1, 3];
let paliSubArr = [];
for (let i = 0; i < pali_arr.length; i++) {
  for (let j = i; j < pali_arr.length; j++) {
    let subarr = [];

    for (let k = i; k <= j; k++) {
      subarr.push(pali_arr[k]);
    }

    let isPalin = subarr.join("") === subarr.slice().reverse().join("");

    if (isPalin === true) {
      paliSubArr.push(subarr);
    }

    // console.log("subarr", subarr.join("")=== subarr.slice().reverse().join(""));
  }
}
// console.log("paliSubArr", paliSubArr);

// Q11. Print all unique subarrays (no repeating elements)

let arr1 = [1, 2, 1];

let unique = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    let subA = [];
    let freq = {};
    let isUniq = true;

    for (let k = i; k <= j; k++) {
      let val = arr1[k];

      if (freq[val]) {
        isUniq = false;
        break;
      } else {
        freq[val] = 1;
        subA.push(val);
      }

     
    }
     if (isUniq) {
        unique.push(subA);
      }
  }
}

console.log("uni------", unique);
