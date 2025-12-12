// Q7. Find the longest increasing subarray
let l_arr = [1, 2, 1, 2, 3];
let longestSubArr = [];
let maxLen = 0;

for (let i = 0; i < l_arr.length; i++) {
  for (let j = i; j < l_arr.length; j++) {
    let sub = [];

    for (let k = i; k <= j; k++) {
      sub.push(l_arr[k]);
    }

    // console.log(sum,"fdggggfdgfds=============", sub);

    let isIncreasing = true;
    for (let x = 1; x < sub.length; x++) {
      if (sub[x] <= sub[x - 1]) {
        isIncreasing = false;
        break;
      }
    }

    if (isIncreasing && sub.length > maxLen) {
      maxLen = sub.length;
      longestSubArr = sub;
    }
    //  console.log("sum", sum);
  }
}

console.log("longestSubArr--------", longestSubArr);

// Q8. Count subarrays whose sum = given target
let sub_arr = [1, 2, 1, 1];
let target = 3;

let subarr = [];
for (let i = 0; i < sub_arr.length; i++) {
  let sum = 0;
  for (let j = i; j < sub_arr.length; j++) {
    sum += sub_arr[j];
    // console.log("sum", sum);

    if (sum === target) {
      subarr.push(sub_arr.slice(i, j + 1));
    }
  }
}

console.log("subarr=========", subarr);

// Q9. Find the smallest subarray with sum >= target
let sm_arr = [2, 3, 1, 2, 4, 3];
let sm_target = 7;

let result = [];
let minLeng = Infinity

for (let i = 0; i < sm_arr.length; i++) {
  for (let j = i; j < sm_arr.length; j++) {
    let sum = 0;
    let subarr = [];

    for (let k = i; k <= j; k++) {
      subarr.push(sm_arr[k]);
      sum += sm_arr[k];
    }
    

    if (sum === sm_target && target ) {
      console.log(sum,"subarr.length", subarr);
//       subarr.length [ 1, 2, 4 ]
// subarr.length [ 4, 3 ]
      
    }

    // console.log(sum, "result", subarr);
  }
}

// console.log(sum, "result", result);


