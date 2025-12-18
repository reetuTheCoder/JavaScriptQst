// let arr = ["x", "x", "z", "z", "y", "x"];
let arr = ["x", "x", "z"];
//[x]
//[x,x]
//[x,x,z]
//[x]
//[x,z]
//[z]

let maxLen = 0;
let longestSubArr = [];

for (let i = 0; i < arr.length; i++) {
  let sub = [arr[i]];
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[j - 1]) {
      sub.push(arr[j]);
    } else {
      break;
    }

    if (sub.length > maxLen) {
        maxLen = sub.length;
        longestSubArr = sub
    }
  }
  console.log(sub);
}

  console.log(longestSubArr,"maxLen", maxLen);