let str = "level";

function reverseStr(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseStr(str.substring(1)) + str[0];
}

console.log(reverseStr(str));

// console.log(str[0], str[str.length-1]);

let isPlaindrom = (str) => {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPlaindrom(str.slice(1, -1));
};

console.log(isPlaindrom(str));

function printArray(arr, index = 0) {
  if (index === arr.length) return 0;

  console.log(arr[index]);
  return arr[index] + printArray(arr, index + 1);
}

console.log(printArray([10, 20, 30, 40]));

// printFibonacci with loop

function printFibonacci(n) {
  let a = 0,
    b = 1;

  for (let i = 1; i <= n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

// printFibonacci(7);

// printFibonacci with recursion

