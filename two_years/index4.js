let str = "helloo";

let freq = {};

// count freq of the characters
// get max char lenght
// store char on the bases of the  freq key in the array
// loop max char length

for (const key of str) {
  freq[key] = (freq[key] || 0) + 1;
}
console.log("freq count", freq);

let maxLength = Math.max(...Object.values(freq));
console.log("maxLength ---", maxLength);

let storeKeyValue = {};

for (const ele in freq) {
  let feqKey = freq[ele];
  // console.log(feqKey);

  if (!storeKeyValue[feqKey]) {
    storeKeyValue[feqKey] = [];
  }
  storeKeyValue[feqKey].push(ele);
}

console.log("storeKeyValue  ", storeKeyValue);

let output = "";
for (let i = maxLength; i >= 1; i--) {
  const element = storeKeyValue[i];

  console.log("element", element);

  if (element) {
    for (const char of element) {
      for (let j = 0; j < i; j++) {
        output += char;
      }
    }
  }
}

console.log("outputoutput ", output);





let str2 = "aaabbc"
let occer
for (let key of str2) {
   occer[key] = (occer[key] || 0) +1
}

console.log("occeroccer", occer);
