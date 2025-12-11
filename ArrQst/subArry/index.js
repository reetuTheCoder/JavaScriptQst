// Q1. Print all subarrays
let p_arr = [1, 2, 3];

for (let i = 0; i < p_arr.length; i++) {
  for (let j = i; j < p_arr.length; j++) {
    let subarr = [];

    for (let k = i; k <= j; k++) {
      subarr.push(p_arr[k]);
    }

    console.log("subarry print", subarr);
  }
}

// Q2. Count how many total subarrays
let count_arr = [5, 6, 7];

// [5]
// [5,6]
// [5,6,7]
// [6]
// [6,7]
// [7]
let totalSub = 0;
for (let st = 0; st < count_arr.length; st++) {
  for (let ed = st; ed < count_arr.length; ed++) {
    totalSub++;
  }
}
console.log("totalSUb", totalSub);

//Q3. Print only subarrays of length 2

let l_arr = [1, 4, 6, 8];

// [1]
// [1,4]
// [1,4,6]
// [1,4,6,8]
// [4]
// [4,6]
// [4,6,8]
// [6]
// [6,8]
// [8]

let targetLeng = 2;
let result = [];
for (let i = 0; i < l_arr.length; i++) {
  for (let j = i; j < l_arr.length; j++) {
    let subarrLeg = [];

    for (let k = i; k <= j; k++) {
      subarrLeg.push(l_arr[k]);
    }

    if (subarrLeg.length === targetLeng) {
      result.push(subarrLeg);
    }
  }
}
console.log("result", result);

let m_arr = [2, -1, 3];

// [2]
// [2,-1]
// [2,-1,3]
// [-1,3]
// [3]

let maxSum = -Infinity;
let bestSubarray = [];
for (let i = 0; i < m_arr.length; i++) {
  for (let j = i; j < m_arr.length; j++) {
    let subarr = [];
    let sum = 0;
    for (let k = i; k <= j; k++) {
      subarr.push(m_arr[k]);
      sum += m_arr[k];
    }
    // console.log(sum, "Best subarray", subarr);

    if (sum > maxSum) {
      maxSum = sum;
      bestSubarray = subarr
    }
  }
}

console.log(bestSubarray, "fdgdfgdf", maxSum);
