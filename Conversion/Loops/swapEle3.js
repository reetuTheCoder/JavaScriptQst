// Q2 — Frequency + Alphabetical Tie-Break (Numbers)

let arr = [5, 3, 5, 2, 3, 5, 2, 7];

let frequesncy = {};

for (let i = 0; i < arr.length; i++) {
  if (frequesncy[arr[i]]) {
    frequesncy[arr[i]]++;
  } else {
    frequesncy[arr[i]] = 1;
  }
}

console.log("frequesncy", frequesncy);

let uniqArrEle = [];

for (const key in frequesncy) {
  uniqArrEle.push(key);
  // console.log(frequesncy[key]);
}

console.log("uniqArrEle", uniqArrEle);

for (let i = 0; i < uniqArrEle.length; i++) {
  for (let j = 0; j < uniqArrEle.length - 1; j++) {
    if (frequesncy[uniqArrEle[j]] < frequesncy[uniqArrEle[j + 1]]) {
      let temp = uniqArrEle[j];
      uniqArrEle[j] = uniqArrEle[j + 1];
      uniqArrEle[j + 1] = temp;
    }
  }
}

let output = [];

for (let i = 0; i < uniqArrEle.length; i++) {
  const ele = frequesncy[uniqArrEle[i]];

  for (let k = 0; k < ele; k++) {
    output.push(Number(uniqArrEle[i]));
  }
}

console.log("output", output);

// Q3 — Frequency Sort for Mixed Case Letters

let arr1 = ["A", "b", "a", "B", "c", "A", "b"];

let freq = {};
let gropUpEle = {};

for (let i = 0; i < arr1.length; i++) {
  let newArrs = arr1[i].toLowerCase();
  // console.log("newArrs", newArrs);

  if (freq[newArrs]) {
    freq[newArrs]++;
    gropUpEle[newArrs].push(arr1[i]);
    // console.log(freq[newArrs],"gropUpElegropUpEle", gropUpEle, "fgfdj",arr1[i] );
  } else {
    freq[newArrs] = 1;
    gropUpEle[newArrs] = [arr1[i]];
  }
}

console.log("freqfreq", freq);
console.log("gropUpElegropUpEle", gropUpEle);

let keysEle = [];

for (const key in freq) {
  keysEle.push(key);
}

for (let i = 0; i < keysEle.length; i++) {
  for (let j = 0; j < keysEle.length - 1; j++) {
    if (
      freq[keysEle[j]] < freq[keysEle[j + 1]] ||
      (freq[keysEle[j]] === freq[keysEle[j + 1]] && keysEle[j] > keysEle[j + 1])
    ) {
      const temp = keysEle[j];

      keysEle[j] = keysEle[j + 1];
      keysEle[j + 1] = temp;
    }
  }
}

let results = [];

for (let i = 0; i < keysEle.length; i++) {
  const element = keysEle[i];

  for (let k = 0; k < gropUpEle[element].length; k++) {
    results.push(gropUpEle[element][k]);
  }
}

console.log("resultsresults", results);

// Q4 — Word Frequency Based on Word Length (Advanced)

let arr2 = ["hi", "hello", "hey", "hello", "hi", "welcome"];

let occurres = {};

for (let i = 0; i < arr2.length; i++) {
  if (occurres[arr2[i]]) {
    occurres[arr2[i]]++;
  } else {
    occurres[arr2[i]] = 1;
  }
}

let keys = [];

for (const key in occurres) {
  keys.push(key);
}

for (let i = 0; i < keys.length; i++) {
  for (let j = 0; j < keys.length - 1; j++) {
    // console.log("occurres[keys[j].length]",occurres[keys[j]]);

    if (
      keys[j].length > keys[j + 1].length ||
      (keys[j].length === keys[j + 1].length &&
        occurres[keys[j].length] < occurres[keys[j + 1].length])
    ) {
      let temp = keys[j];

      keys[j] = keys[j + 1];
      keys[j + 1] = temp;
    }
  }
}

let arrByLength = [];

for (let i = 0; i < keys.length; i++) {
  const ele = occurres[keys[i]];

  for (let k = 0; k < ele; k++) {
    arrByLength.push(keys[i]);
  }
}
console.log("occurres", occurres);

console.log("arrByLength", arrByLength);

// Q5 — Frequency Sort Using LAST Character

let arr3 = ["car", "bar", "far", "bat", "cat", "hat"];

let freqOccur = {};

let gropByLastChar = {};

for (let i = 0; i < arr3.length; i++) {
  let newArrs = arr3[i].slice(-1);
  // console.log("newArrs", newArrs);

  if (freqOccur[newArrs]) {
    freqOccur[newArrs]++;
    gropByLastChar[newArrs].push(arr3[i]);
  } else {
    freqOccur[newArrs] = 1;
    gropByLastChar[newArrs] = [arr3[i]];
  }
}

let arrKyes = [];

for (const key in freqOccur) {
  arrKyes.push(key);
}

for (let i = 0; i < arrKyes.length; i++) {
  for (let j = 0; j < arrKyes.length - 1; j++) {
    // console.log("freqOccur[arrKyes[j]", arrKyes[j]);

    if (freqOccur[arrKyes[j]] < freqOccur[arrKyes[j + 1]]) {
      let temp = arrKyes[j];
      arrKyes[j] = arrKyes[j + 1];
      arrKyes[j + 1] = temp;
    }
  }
}

let newArrdata = [];

for (let i = 0; i < arrKyes.length; i++) {
  const ele = arrKyes[i];

  for (let k = 0; k < gropByLastChar[ele].length; k++) {
    newArrdata.push(gropByLastChar[ele][k]);
  }
}

console.log("freqOccur", freqOccur);
console.log("gropByLastChar", gropByLastChar);
console.log("output", newArrdata);

// Q6 — Frequency Sort of Objects (REAL INTERVIEW)

let users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
  { name: "D", role: "guest" },
  { name: "E", role: "user" },
];

let userFreq = {};

let gropByRole = {};

for (let i = 0; i < users.length; i++) {
  let newArrs = users[i].role;
  // console.log("newArrs", newArrs);

  if (userFreq[newArrs]) {
    userFreq[newArrs]++;
    gropByRole[newArrs].push(users[i]);
  } else {
    userFreq[newArrs] = 1;
    gropByRole[newArrs] = [users[i]];
  }
}

let userKyes = [];

for (const key in userFreq) {
  userKyes.push(key);
}

for (let i = 0; i < userKyes.length; i++) {
  for (let j = 0; j < userKyes.length - 1; j++) {
    // console.log("freqOccur[userKyes[j]------------", userKyes[j]);

    if (userFreq[userKyes[j]] < userFreq[userKyes[j + 1]]) {
      let temp = userKyes[j];
      userKyes[j] = userKyes[j + 1];
      userKyes[j + 1] = temp;
    }
  }
}

let userArr = [];

for (let i = 0; i < userKyes.length; i++) {
  const ele = userKyes[i];

  for (let k = 0; k < gropByRole[ele].length; k++) {
    let gropEle = gropByRole[ele][k];

    userArr.push(gropEle.name);
  }
}
console.log("gropByRole--------------------", gropByRole);
console.log("userFreq--------------------", userFreq);
console.log("userKyes--------------------", userKyes);
console.log("userArr--------------------", userArr);
