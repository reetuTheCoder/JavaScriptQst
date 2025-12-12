// Longest Strictly Increasing Subarray (Basic)
let arr = [5, 6, 1, 2, 3, 4];
// let arr =  [1, 1, 2, 2, 2, 1, 3, 3]

// [5]
// [5,6]
// [5,6,1]
// [5,6,1,2]
// [5,6,1,3]
// [5,6,1,3,4]
//[6]
//[6,1]
//[6,1,2]
//[6,1,2,3]
//[6,1,3,4]
//[1,]
//[1,2]
//[1,2,3]
//[1,2,3,4]

let maxLen = 1;
let currlen = 1;
let startIndex = 0;
let currStrSubArr = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    currlen++;
  } else {
    if (currlen > maxLen) {
      maxLen = currlen;
      startIndex = currStrSubArr;
    }
    currlen = 1;
    currStrSubArr = i;
  }
}

if (currlen > maxLen) {
    maxLen = currlen;
    startIndex = currStrSubArr;
}


let longest = arr.slice(startIndex, startIndex + maxLen)
console.log("maxLen", maxLen);
console.log("currlen", currlen);
console.log("startIndex", startIndex);
console.log("currStrSubArr", currStrSubArr);
console.log("longest", longest);



