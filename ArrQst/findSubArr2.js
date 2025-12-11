let arr = [2, 3, 4, 1, 2, 3, 4, 5];

let maxLen = 1;
let curLen = 1;
let st = 0;
let ansSt = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1] + 1) {
    curLen++;
  } else {
    curLen = 1;
    st = i;
  }

  if (curLen > maxLen) {
    maxLen = curLen;
    ansSt = st;
  }
}

let result = arr.slice(ansSt, ansSt + maxLen);
console.log("Longest Consecutive Elements Subarray =", result);
console.log("Length =", maxLen);
