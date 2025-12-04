// Q7. Print a 3×3 grid of numbers

for (let i = 1; i <= 3; i++) {
  // console.log("element----I------", i);
  let row = "";
  for (let j = 1; j <= 3; j++) {
    // console.log("element----J------", j);
    row += j + " ";
  }
  console.log("dfdgd", row);
}

//  Q8. Print this pattern

for (let i = 1; i <= 3; i++) {
  let start = "";

  for (let k = 1; k <= i; k++) {
    start += "*";
  }

  console.log("start", start);
}

// Q9. Count total pairs (i, j)
let arr = [1, 2, 3];

let totalCount = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // console.log("element ", arr[i], arr[j]);
    totalCount++;
  }
}
console.log("totalCount", totalCount);

// Q10. Print all pairs where i ≠ j

// let totalCount = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      console.log("element ", arr[i], arr[j]);
    }
  }
}
// console.log("totalCount", totalCount);

// Q11. For each number, print all numbers larger than it
let arr1 = [1, 3, 2];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] > arr1[i]) {
      console.log("element 1111", arr1[i], arr1[j]);
    }
  }
}

// Q12. Print all pairs from two arrays

let a = [1, 2];
let b = ["x", "y", "z"];

for (let i = 0; i < a.length; i++) {
  // console.log("aaaa", a[i]);

  for (let j = 0; j < b.length; j++) {
    // console.log("bbbbbbbb", b[i]);
    console.log("final loop", a[i], b[j]);
  }
}
