// Print numbers from 1 to N

function printNumN(n) {
  if (n === 0) {
    return;
  }

  printNumN(n - 1);
  // console.log(n);
}

// console.log(printNumN(5));

function n_printNum(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  n_printNum(n - 1);
}

// console.log(n_printNum(5));

function printName(n) {
  if (n === 0) {
    return;
  }

  console.log("JS");
  printName(n - 1);
}

// console.log(printName(3));

function sumN(n) {
  if (n === 0) {
    return 0;
  }

  // console.log(n);
  return n + sumN(n - 1);
}

// console.log(sumN(5));

function MultiplayN(n) {
  if (n === 1) {
    return 1;
  }

  // console.log(n);
  return n * MultiplayN(n - 1);
}

console.log(MultiplayN(4));

function CountN(n) {
  if (n === 0) {
    return 0;
  }

  // console.log(n);
  return 1 + CountN(Math.floor(n / 10));
}

console.log(CountN(1234));


function addN(n) {
  if (n === 0) {
    return 0;
  }

  // console.log(n);
  return (n % 10) + addN(Math.floor(n / 10));
}

console.log(addN(1234));