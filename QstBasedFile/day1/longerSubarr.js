// max length subarray
// let arr = ["x", "x", "z", "z", "y", "x"];

let arr = ["x", "x", "z"];

// outer loop
// var count = 0
// inner loop (start from outer)
// add 1more loop to get sub arr



let maxLen = 0;
let maxSubArr = []
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let sub = [];
    for (let k = i; k <= j; k++) {
      sub.push(arr[k]);
    }

    // console.log("sub====", sub);

    if (sub.length > maxLen) {
      maxLen = sub.length;
      maxSubArr = sub
    }
  }
}

console.log(maxLen, maxSubArr);




// Longest subarray without repeating elements”