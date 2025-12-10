// Q1 Longest Increasing Subarray

let arr = [1, 2, 3, 1, 2, 3, 4];

let maxLen = 1;
let curLen = 1;

let start = 0;
let maxStart = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i -1]) {
//         curLen++;
//     } else {
//         curLen = 1
//     }

//     console.log(curLen,"djfdgjfdgf", maxLen);
//     if (curLen > maxLen) {
//         maxLen = curLen
//     }
// }

// console.log("max subArr length" , maxLen);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    curLen++;
  } else {
    curLen = 1;
    start = i;
  }

  // console.log(curLen,"djfdgjfdgf", maxLen);
  if (curLen > maxLen) {
    maxLen = curLen;
    maxStart = start;
  }
}

// console.log(start,maxLen,"maxStart", maxStart,curLen);

let longestSubArr = arr.slice(maxStart, maxStart + maxLen);
console.log("max subArr ", longestSubArr);

// Q2 Longest Decreasing Subarray

let decrs = [5, 4, 3, 1, 2, 1];

let d_maxLen = 1;

let d_curLen = 1;
let st = 0;
let maxSt = 0;

for (let i = 0; i < decrs.length; i++) {
  if (decrs[i] < decrs[i - 1]) {
    d_curLen++;
  } else {
    d_curLen = 1;
    st = i;
  }

  if (d_curLen > d_maxLen) {
    d_maxLen = d_curLen;
    maxSt = i - d_maxLen + 1;

    console.log(maxSt);
  }
}

let newarr = decrs.slice(maxSt, maxSt + d_maxLen);
console.log("newarr ", newarr);

//Q3 Maximum Sum Increasing Subarray
let sum = 0;

for (let i = 1; i < newarr.length; i++) {
  sum += newarr[i];
}

console.log("sum--------", sum);

// Q4 smallest Increasing Subarray

// let minLen = Infinity;
// let minCurLen = 1;

// let start1 = 0;      // track current start
// let minStart = 0;   // track smallest subarray start

// for (let i = 1; i < decrs.length; i++) {
//   if (decrs[i] > decrs[i - 1]) {   // increasing
//     minCurLen++;
//   } else {

//     // check previous segment
//     if (minCurLen >= 2 && minCurLen < minLen) {
//       minLen = minCurLen;
//       minStart = start1;
//     }

//     // reset
//     minCurLen = 1;
//     start1 = i;
//   }
// }

// // final check for last subarray
// if (minCurLen >= 2 && minCurLen < minLen) {
//   minLen = minCurLen;
//   minStart = start1;
// }

// let minSubArr = decrs.slice(minStart, minStart + minLen);
// console.log("minSubArr-------------- ", minSubArr);
