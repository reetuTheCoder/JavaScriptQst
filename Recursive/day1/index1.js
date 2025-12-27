// Count characters in string

function countCharac(str, index = 0) {
  if (index === str.length) {
    return 0;
  }

  return 1 + countCharac(str, index + 1);
}

// console.log(countCharac("hello"));

function findMax(arr, index = 0) {
  if (index === arr.length - 1) {
    return arr[index];
  }

  let getmax = findMax(arr, index + 1);
  // console.log(getmax, arr[index] );

  return arr[index] > getmax ? arr[index] : getmax;
}

// console.log(findMax([3, 7, 2, 9]));

/// Print Fibonacci till N

function printFibo(n, a = 0, b = 1) {
  if (n === 0) {
    return;
  }
  console.log(a);
  printFibo(n - 1, b, a + b);
}

// console.log(printFibo(7));

// Print Fibonacci between two numbers

function printFiboBetween(start, end, a = 0, b = 1) {
  if (a > end) {
    return;
  }

  if (a >= start) {
    console.log(a);
  }
  printFiboBetween(start, end, b, a + b);
}

console.log(printFiboBetween(5, 50));

// Count even numbers in array
function sumEven(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }

  if (arr[index] % 2 === 0) {
    return 1 + sumEven(arr, index + 1);
  }

  return sumEven(arr, index + 1);
}

console.log(sumEven([1, 2, 3, 4, 6]));

// Find an element in array

function findEle(arr, target, index = 0) {
  if (index === arr.length) {
    return false;
  }


  if (arr[index] === target) {
    return true
  }

  return findEle(arr, target, index + 1)
}

console.log(findEle([1,4,7],4));


// Print even numbers between two numbers
function printEle(arr, start, end,  index = 0) {
  if (index === arr.length) {
    return 
  }


  if (arr[index]>= start && arr[index] <= end && arr[index] % 2 === 0) {
    console.log(arr[index]);
  }

  printEle(arr,  start, end,index + 1)
}

console.log(printEle([1, 4, 6, 8, 10, 12, 3], 5, 20));
