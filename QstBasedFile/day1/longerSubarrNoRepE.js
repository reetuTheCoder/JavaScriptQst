// Longest subarray without repeating elements
let arr = ["x", "x", "z", "z", "y", "x"];

// let arr = ["x", "x", "z"];

// outer loop
// var count = 0
// inner loop (start from outer)
// add 1more loop to get sub arr
// check duplicate ele

let maxLen = 0;
let maxSubArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let sub = [];
    let freq = {};
    let isRepeted = false;
    for (let k = i; k <= j; k++) {
      if (freq[arr[k]]) {
        // freq[arr[k]]++;
        // console.log("freq[arr[k]]",freq[arr[k]]);
        
        isRepeted = true;
        break;
      }
      freq[arr[k]] = 1;
      sub.push(arr[k]);
    }

    // console.log("sub====", sub);

    if (!isRepeted && sub.length > maxLen) {
      maxLen = sub.length;
      maxSubArr = sub;
    }
  }
}

console.log(maxLen, maxSubArr);
