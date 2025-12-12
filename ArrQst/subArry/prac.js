// Q1. Print all subarrays
let p_arr = [1, 2, 3];

for (let i = 0; i < p_arr.length; i++) {
  for (let j = i; j < p_arr.length; j++) {
    let subarr = [];

    for (let k = i; k <= j; k++) {
      subarr.push(p_arr[k]);
    }

    console.log("subArry", subarr);
  }
}

// Q2. Count how many total subarrays
let count_arr = [5, 6, 7];

let totalSubArr = [];
let count = 0;
for (let i = 0; i < count_arr.length; i++) {
  for (let j = i; j < count_arr.length; j++) {
    let subarr = [];
    for (let k = i; k <= j; k++) {
      subarr.push(count_arr[k]);
    }

    totalSubArr.push(subarr);
    count++;
  }
}
console.log(count, "Count totalSubArr", totalSubArr);

//Q3. Print only subarrays of length 2
let l_arr = [1, 4, 6, 8];
let allSubArr = [];
let targetLen = 2;

let subArrLen = [];

for (let i = 0; i < l_arr.length; i++) {
  for (let j = i; j < l_arr.length; j++) {
    allSubArr.push(l_arr.slice(i, j + 1));
  }
}
for (const keys of allSubArr) {
  //   console.log(keys);

  if (keys.length === targetLen) {
    subArrLen.push(keys);
  }
}
console.log("subArrLen-----------", subArrLen);

// Q4. Find subarray with maximum sum (Brute force)
let m_arr = [2, -1, 3];
// [2]
// [2,-1]
// [2,-1,3]
// [-1]
// [-1,3]
// [3]

let m_subArry = [];
let m_sum = -Infinity;

for (let i = 0; i < m_arr.length; i++) {
  for (let j = i; j < m_arr.length; j++) {
    let sum = 0;
    let subarr = [];

    for (let k = i; k <= j; k++) {
      subarr.push(m_arr[k]);
      sum += m_arr[k];
    }

    // console.log(sum,"ghgfhgfhj", subarr);

    if (sum > m_sum) {
      console.log("subarr", subarr);

      m_sum = sum;
      m_subArry = subarr;
    }
  }
}

console.log(m_sum, "m_subArry-----------", m_subArry);

// Q5. Count subarrays whose sum is even
let evn_arr = [1, 2, 3];
let ev_sub = [];
for (let i = 0; i < evn_arr.length; i++) {
  for (let j = i; j < evn_arr.length; j++) {
    let sum = 0;
    let subarr = [];

    for (let k = i; k <= j; k++) {
      subarr.push(evn_arr[k]);
      sum += evn_arr[k];
    }

    if (sum % 2 === 0) {
      ev_sub.push(subarr);
    }
    // console.log(sum,"subarr",subarr);
  }
}

console.log("evenSum", ev_sub);

// Q6. Print all subarrays that start with an even number
let start_ev_arr = [2, 3, 4];
let firstEven = [];
for (let i = 0; i < start_ev_arr.length; i++) {
  console.log("start_ev_arr", start_ev_arr[i]);

  if (start_ev_arr[i] % 2 === 0) {
    for (let j = i; j < start_ev_arr.length; j++) {
      firstEven.push(start_ev_arr.slice(i, j + 1));
    }
  }
}
console.log("firstEven-----------", firstEven);
