// Print numbers from 1 to N

function printNumN(n) {
  if (n === 0) {
    return;
  }

  printNumN(n - 1);
  console.log(n);
}
// console.log(printNumN(5));
function n_printNumN(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  n_printNumN(n - 1);
}
// console.log(n_printNumN(5));

function PrintArr(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  console.log(arr[index]);

  PrintArr(arr, index + 1);
}

// console.log(PrintArr([10, 20, 30]));

function reverseArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  return reverseArr(arr.slice(1)).concat(arr[0]);
}

// console.log(reverseArr([10, 20, 30]));

// Sum of array elements
function sumArr(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }

  return arr[index] + sumArr(arr, index + 1);
}

// console.log(sumArr([10, 20, 30]));

// Product of array elements

function multiArr(arr, index = 0) {
  if (index === arr.length) {
    return 1;
  }

  return arr[index] * multiArr(arr, index + 1);
}

// console.log(multiArr([2,3,4]));

// Factorial of N

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(5));


// Reverse a string
function reverseStr(str) {
  if (str.length <= 0) {
    return str;
  }

  return reverseStr(str.substring(1)) + str[0];
}

console.log(reverseStr("hello"));

// Check palindrome
function isPlaindromStr(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length -1]) {
    return false
  }
  return isPlaindromStr(str.slice(1, -1));
}

console.log(isPlaindromStr("racecar"));