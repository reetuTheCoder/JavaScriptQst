// count total subarray
let arr = ["x", "x", "z", "z", "y", "x"];

// let arr = ["x", "x", "z"];

// outer loop
// var count = 0
// inner loop (start from outer)
// add 1more loop 
// count increse

let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let sub = [];
    for (let k = i; k <= j; k++) {
      sub.push(arr[k]);
    }
    count++;
    // console.log("sub====", sub);
  }
}

console.log("count", count);
