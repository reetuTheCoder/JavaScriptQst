// Q1. Count subarrays with sum = K
let arr = [1, 2, 1, 1];
let K = 3;
let countSubArr = [];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];

    if (sum === K) {
      countSubArr.push(arr.slice(i, j + 1));
    }
  }

  //   console.log(sum);
}

// console.log("count subarry", countSubArr);

// Q2. Longest subarray with sum = K

let l_arr = [1, 2, 3, 1, 1, 1, 2];
let target = 6;
let longestSub = [];
let maxLen = 0;
for (let i = 0; i < l_arr.length; i++) {
  let sum = 0;

  for (let j = i; j < l_arr.length; j++) {
    sum += l_arr[j];

    if (sum === target) {
      let allLongestSubarr = l_arr.slice(i, j + 1);

      if (allLongestSubarr.length > maxLen) {
        maxLen = allLongestSubarr.length;
        longestSub = allLongestSubarr;
      }
    }
  }

  //   console.log(sum);
}
// console.log("longestSub", longestSub);

// Q3. Longest increasing subarray

let increArr = [1, 2, 3, 2, 3, 4];
let max = 1;
let curLen = 1;

let bestStart = 0;
let curStart = 0;

for (let i = 1; i < increArr.length; i++) {
  if (increArr[i] > increArr[i - 1]) {
    curLen++;
  } else {
    if (curLen > max) {
      max = curLen;
      bestStart = curStart;
    }
    curLen = 1;
    curStart = i;
  }
}

// final check (if longest is at end)
if (curLen > max) {
  max = curLen;
  bestStart = curStart;
}

let longestIncreasingSubarray = increArr.slice(bestStart, bestStart + max);

console.log(longestIncreasingSubarray);
