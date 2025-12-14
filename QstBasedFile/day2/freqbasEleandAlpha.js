let arr = ["x", "x", "a", "a", "y", "x", "a"];

let freq = {};

for (const key of arr) {
  freq[key] = (freq[key] || 0) + 1;
}

let obj = {};

for (const key in freq) {
  let val = freq[key];
  if (!obj[val]) {
    obj[val] = [];
  }

  let isAlphabetical = false;

  for (let i = 0; i < obj[val].length; i++) {
    if (obj[val][i]) {
      obj[val].splice(i, 0, key)
      isAlphabetical = true;
      break;
    }
  }

  if (!isAlphabetical) {
    obj[val].push(key)
  }
}

console.log(obj);


let output = []

for (let i = 1; i < arr.length; i++) {
  if (obj[i]) {
    for (const key of obj[i]) {
      for (let j = 0; j < i; j++) {
        output.push(key)
      }
    }
  }
  
}

console.log(output);
