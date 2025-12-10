// Q1 Longest Increasing Subarray

let arr = [5, 4, 3, 1, 2, 1];

// let minLen = 1;

// let min_curLen = 1;
// let st = 0;
// let maxSt = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[i - 1]) {
//     min_curLen++;
//   } else {
//     min_curLen = 1;
//     st = i;
//   }

//   if (min_curLen > minLen) {
//     minLen = min_curLen;
//     maxSt = st ;

//     console.log(maxSt);
//   }
// }

// let newarr = arr.slice(maxSt, maxSt + minLen);
// console.log("newarr ", newarr);




// Q1 Longest deccreasing Subarray

// let minLen = 1;

// let min_curLen = 1;
// let st = 0;
// let maxSt = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < arr[i - 1]) {
//     min_curLen++;
//   } else {
//     min_curLen = 1;
//     st = i;
//   }

//   if (min_curLen > minLen) {
//     minLen = min_curLen;
//     maxSt = st ;

//     console.log(maxSt);
//   }
// }

// let newarr = arr.slice(maxSt, maxSt + minLen);
// console.log("newarr ", newarr);





// Q1 smallest Increasing Subarray

// let minLen = Infinity;

// let min_curLen = 1;
// let st = 0;
// let maxSt = -1;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[i - 1]) {
//     min_curLen++;
//   } else {
//     min_curLen = 1;
//     st = i;
//   }

//   if (min_curLen >= 2 && min_curLen < minLen) {
//     minLen = min_curLen;
//     maxSt = st ;

//     console.log(maxSt);
//   }
// }

// let newarr = arr.slice(maxSt, maxSt + minLen);
// console.log("newarr ", newarr);






















// Q2 smallest decreasing Subarray

let minLen = Infinity;

let min_curLen = 1;
let st = 0;
let maxSt = -1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[i - 1]) {
    min_curLen++;
  } else {
    min_curLen = 1;
    st = i;
  }

  if (min_curLen >= 2 && min_curLen < minLen) {
    minLen = min_curLen;
    maxSt = st ;

    console.log(maxSt);
  }
}

let newarr = arr.slice(maxSt, maxSt + minLen);
console.log("newarr ", newarr);


//Q3 Maximum Sum Increasing Subarray
// let sum = 0;

// for (let i = 1; i < newarr.length; i++) {
//   sum += newarr[i];
// }

// console.log("sum--------", sum);
