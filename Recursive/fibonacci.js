// print Fibonacci with loop
function printFibonacci(n) {
  let a = 0,
    b = 1;

  for (let i = 1; i <= n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

// print Fibonacci with recursion

function fibonacciReq(n, a = 0, b = 1) {
  if (n === 0) return;
  console.log(a);
  fibonacciReq(n - 1, b, a + b);
}

// console.log(fibonacciReq(10));


// Print Fibonacci between two numbers

function fibBetween(start, end) {
  let a = 0, b = 1;

  while (a <= end) {
    if (a >= start) {
      console.log(a);
    }
    [a, b] = [b, a + b];
  }
}

fibBetween(5, 50);


function fibBetween(start, end, a = 0, b = 1) {
  // 🛑 base case
  if (a > end) return;

  // print if in range
  if (a >= start) {
    console.log(a);
  }

  // 🔁 recursive call (move forward)
  fibBetween(start, end, b, a + b);
}

fibBetween(5, 50);
