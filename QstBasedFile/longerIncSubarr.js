// Q6. longest increasing order subarray
// let arr = ["x", "x", "z", "z", "y", "x"];

let arr = ["x", "x", "z"];

// sub==== [ 'x' ]
// sub==== [ 'x', 'x' ]
// sub==== [ 'x', 'x' ]
// sub==== [ 'x' ]
// sub==== [ 'x', 'z' ]
// sub==== [ 'z' ]

let maxLen = 0;
let maxSubArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let sub = [];
    let isIncreasing = true;
    for (let k = i; k <= j; k++) {
      sub.push(arr[k]);
      console.log("k !== i",k !== i);
      
      // k !== i (when ever the k === i it will be false both k and i at the start will be same to compair )
      if (k !== i) {
        if (arr[k] <= arr[k - 1]) {
          isIncreasing = false;
          break;
        }
      }
    }

    // console.log("sub====", sub);

    if (isIncreasing && sub.length > maxLen) {
      maxLen = sub.length;
      maxSubArr = sub;
    }
  }
}

console.log(maxLen, maxSubArr);
