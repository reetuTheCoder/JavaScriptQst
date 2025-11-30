let str = "ccbbaaa";
let newStr = [];
let makeArr = str.split("").reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(makeArr);

let strLength = Object.keys(makeArr).length;

console.log("strLength", strLength);
for (let i = 0; i < strLength; i++) {
  let maxOccerCount = 0;
  let maxKey = null;

  for (const key in makeArr) {
    console.log("keykey--------", key);
    console.log("maxKey--------", maxKey);
    console.log("maxOccerCount111-----", maxOccerCount);
    console.log("makeArr[key]1111-----", makeArr[key]);
    if (
      makeArr[key] > maxOccerCount ||
      (makeArr[key] === maxOccerCount && key < maxKey)
    ) {
      maxOccerCount = makeArr[key];
      maxKey = key;
    }
  }

  console.log("maxOccerCount ", maxOccerCount);
  console.log("maxKey ", maxKey);

  for (let k = 0; k < maxOccerCount; k++) {
    newStr.push(maxKey);
  }

  delete makeArr[maxKey];
}

console.log("newStr  ", newStr.join(""));
