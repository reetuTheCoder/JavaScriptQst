// print subarray

let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  let subarr = [];
  for (let j = i; j < arr.length; j++) {
    subarr.push(arr[j]);

    console.log("sub arry", subarr);
  }
}

// maximum subarry

let arrs = [2, -1, 3, -4, 5];

let maxSum = arrs[0];
let currSum = arrs[0];

for (let i = 1; i < arrs.length; i++) {
  currSum = Math.max(arrs[i], currSum + arrs[i]);
  maxSum = Math.max(maxSum, currSum);
  console.log(maxSum);
}
console.log(maxSum);

// longest increasing sub arry

let arry = [1, 2, 3, 1, 2, 3, 4];

let maxLen = 1;
let curLen = 1;

for (let i = 1; i < arry.length; i++) {
  if (arry[i] > arry[i - 1]) {
    curLen++;
  } else {
    curLen = 1;
  }
  maxLen = Math.max(maxLen, curLen);
}
console.log("maxLen", maxLen);

// longets decreasing subarry

let arrdec = [9, 7, 5, 6, 4, 3];

let maxlen = 1;
let curlen = 1;

for (let i = 1; i < arrdec.length; i++) {
  if (arrdec[i] < arrdec[i - 1]) {
    curlen++;
  } else {
    curlen = 1;
  }
  maxlen = Math.max(maxlen, curlen);
}

console.log("max", maxlen);

// maximum sum of subarr
let arrray = [2, 1, 5, 1, 3, 2];
let k = 3;

let maxsum = 0;
let w_sum = 0;

for (let i = 0; i < k; i++) {
  w_sum += arrray[i];
}

maxsum = w_sum;

// console.log(maxSum,"w",w_sum);

for (let j = k; j < arrray.length; j++) {
  w_sum = w_sum - arrray[j - k] + arrray[j];
  maxsum = Math.max(maxsum, w_sum)
}
console.log("maxsum", maxsum);

