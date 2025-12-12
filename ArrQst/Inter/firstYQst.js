// 1. Find the largest number in an array

let arr = [1, 5, 3, 9, 2];
let max = Math.max(...arr);

console.log(max);
let maxVal = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxVal) {
    maxVal = arr[i];
  }
}

console.log("max val", maxVal);

// 2. Find the smallest number in an array

let arr_sm = [3, 2, 8, 1, 7];

let min = Math.min(...arr_sm);
console.log("min", min);

let minVal = arr_sm[0];
for (let i = 0; i < arr_sm.length; i++) {
  if (arr_sm[i] < minVal) {
    minVal = arr_sm[i];
  }
}

console.log("minVal", minVal);

// 3. Reverse an array without using .reverse()

let revs = [1, 2, 3, 4];
let revsArry = [];

for (let i = revs.length - 1; i >= 0; i--) {
  revsArry.push(revs[i]);
}

console.log("revsArry", revsArry);

// 4. Count even and odd numbers in an array

let evenOdd = [1, 2, 3, 4, 5];

let even = 0;
let odd = 0;

for (let i = 0; i < evenOdd.length; i++) {
  if (evenOdd[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(odd, "dfd", even);

// 5. Check if an element exists in an array (without using .includes())
let new_arr = [1, 2, 3, 4];
let target = 4;

let ismatch = false;
for (let i = 0; i < new_arr.length; i++) {
  if (new_arr[i] === target) {
    ismatch = true;
    break;
  }
}
console.log(ismatch);

// 6. Remove duplicates from an array

let dupArr = [1, 2, 2, 3, 4, 4];

let uniqeArr = [];

for (let i = 0; i < dupArr.length; i++) {
  if (!uniqeArr.includes(dupArr[i])) {
    uniqeArr.push(dupArr[i]);
  }
}
console.log("uniqeArr", uniqeArr);

// 7. Sum of all elements in the array

let ele = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i < ele.length; i++) {
  sum += ele[i];
}

console.log("sum", sum);

// 9. Merge two arrays without using .concat()
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];
console.log("merged", merged);

// 11. Find the second largest number in an array

let largestArr = [5, 1, 9, 2, 7];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < largestArr.length; i++) {
  if (largestArr[i] > first) {
    second = first;
    first = largestArr[i];
  } else if (largestArr[i] > second && largestArr[i] < first) {
    second = largestArr[i];
  }
}
console.log(first,"second", second);



// 12. Check if an array is sorted (ascending order)

let ascending = [1, 2, 3, 4]
let isSorted = true;


for (let i = 0; i < ascending.length; i++) {
    if (ascending[i] > ascending[i +1]) {
        isSorted = false;
        break
    }
    
}

console.log("isSorted", isSorted);


// 13. Find all elements greater than a given number

let num = [2, 8, 5, 7];
let targetnum = 5

let gretEle = [];

for (let i = 0; i < num.length; i++) {
    
   if (num[i] > targetnum) {
    gretEle.push(num[i])
   }
    
}

console.log("gretEle", gretEle);


// 14. Count frequency of each element

let feqArr = [1, 2, 1, 3, 2];

let freq = {}

for (const key of feqArr) {
    freq[key] = (freq[key] || 0) + 1
}

console.log('freq', freq);


// 15. Flatten a simple nested array (one-level)

let nested = [1, [2, 3], 4]

console.log(nested.flat(1));
