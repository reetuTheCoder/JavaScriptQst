let arr = ["x", "x", "z", "z", "y", "x"];

// steps

// count freq
// create an arr
// add conditions

let freq = {};
let uniqe = [];
for (const key of arr) {
  freq[key] = (freq[key] || 0) + 1;
}

for (const key in freq) {
    uniqe.push(key)
}
console.log(freq);
console.log("uniqe", uniqe);
