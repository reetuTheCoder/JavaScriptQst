// let arr = [1, 2, 3, 3, 3, 4, 5, 6, 2, 4, 4, 2, 6, 6, 6];

let arr = [1, 2, 3, 4, 5, 6, 2, 4, 2, 6, 6, 6];

let freq = {};

for (let i = 0; i < arr.length; i++) {
  if (freq[arr[i]]) {
    freq[arr[i]]++;
  } else {
    freq[arr[i]] = 1;
  }
}

console.log("freq", freq);

let keys = [];

for (const key in freq) {
  keys.push(key);
}

console.log("keyskeys", keys);

for (let i = 0; i < keys.length; i++) {
  for (let j = 0; j < keys.length - 1; j++) {
    let a = keys[j];
    let b = keys[j + 1];

    if (
      freq[a] < freq[b] ||
      (freq[a] === freq[b] && a % 2 !== 0 && b % 2 === 0) ||
      (freq[a] === freq[b] && a % 2 === b % 2 && a > b)
    ) {
      let temp = keys[j];
      keys[j] = keys[j + 1];
      keys[j + 1] = temp;
    }
  }
}

let results = [];

for (let i = 0; i < keys.length; i++) {
  const element = freq[keys[i]];

  for (let k = 0; k < element; k++) {
    results.push(Number(keys[i]));
  }
}
console.log("resultsresults", results);

let str = "Programming";
let newStr = str.toLowerCase();

let occurres = {};

for (let i = 0; i < newStr.length; i++) {
  if (occurres[newStr[i]]) {
    occurres[newStr[i]]++;
  } else {
    occurres[newStr[i]] = 1;
  }
}

console.log("occurres", occurres);

let strKeys = [];

for (const key in occurres) {
  strKeys.push(key);
}

console.log("strKeys", strKeys);

for (let i = 0; i < strKeys.length; i++) {
  for (let j = 0; j < strKeys.length - 1; j++) {
    let a = strKeys[j];
    let b = strKeys[j + 1];

    if (occurres[a] < occurres[b] || (occurres[a] === occurres[b] && a > b)) {
      let temp = strKeys[j];
      strKeys[j] = strKeys[j + 1];
      strKeys[j + 1] = temp;
    }
  }
}

let output = [];

for (let i = 0; i < strKeys.length; i++) {
  const element = occurres[strKeys[i]];

  for (let k = 0; k < element; k++) {
    output.push(strKeys[i]);
  }
}

console.log("output", output.join(""));
