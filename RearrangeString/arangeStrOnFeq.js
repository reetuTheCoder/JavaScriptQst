let arr = ["x", "y", "z", "x", "x", "y"];

let freq = {};
let result = [];
for (const ele of arr) {
  freq[ele] = (freq[ele] || 0) + 1;
}

console.log(freq);

let extrkeys = Object.keys(freq);
console.log("extrkeys", extrkeys);

for (let i = 0; i < extrkeys.length; i++) {
  let maxCount = 0;
  let maxKyes = null;

  for (const key in freq) {
    console.log("freq[key] ", freq[key]);

    if (freq[key] > maxCount) {
      maxCount = freq[key];

      maxKyes = key;
    }
  }

  console.log("maxKyes", maxKyes);
  console.log("maxCount", maxCount);

  for (let k = 0; k < maxCount; k++) {
    result.push(maxKyes);
  }

  delete freq[maxKyes];
}

console.log("result------", result);

/// 2nd way

let occer = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;

  return acc;
}, {});

console.log("occer--------------", occer);

// let output = [];

// let unqKeyCount = Object.values(occer).length;
// console.log("unqKeyCount--------------", unqKeyCount);

// for (let i = 0; i < unqKeyCount; i++) {
//   let maxKeysval = null;
//   let maxval = 0;

//   for (const key in occer) {
//     if (occer[key] > maxval) {
//       maxval = occer[key];
//       maxKeysval = key
//     }
//   }

//   for (let j = 0; j < maxval; j++) {
//    output.push(maxKeysval)

//   }

//   delete occer[maxKeysval]
// }
// console.log("output--------------", output);

/// 3rd way

let maxFreq = Math.max(...Object.values(occer));
    console.log("maxFreq----------",maxFreq);

let emptyArrForVal = Array.from({ length: maxFreq + 1 }, () => []);

console.log("emptyArrForVal ------------", emptyArrForVal);

for (const key in occer) {
  emptyArrForVal[occer[key]].push(key);
}
console.log("emptyArrForVal1111 ------------", emptyArrForVal);

let newArr = [];

for (let i = emptyArrForVal.length - 1; i >= 0; i--) {
    console.log("emptyArrForVal[i]----------",emptyArrForVal[i]);
  for (const key of emptyArrForVal[i]) {
      for (let j = 0; j < i; j++) {
        console.log("jjjjjj", j);
        
      newArr.push(key);
    }
  }
  
}


console.log(newArr);
