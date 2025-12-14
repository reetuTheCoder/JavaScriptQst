// longest increasing sub arry

let arry = [1, 2, 3, 1, 2, 3, 4];

let maxLen = 0;
let maxSubArr = [];

for (let i = 0; i < arry.length; i++) {
  let subarr = [arry[i]];

  for (let j = i + 1; j < arry.length; j++) {
    if (arry[j] > arry[j - 1]) {
      subarr.push(arry[j]);
    } else {
      break;
    }
    console.log("sub", subarr);
  }

  if (subarr.length > maxLen) {
    maxLen = subarr.length
    maxSubArr = subarr
  }

  
}
console.log(maxSubArr,"maxLen", maxLen);
