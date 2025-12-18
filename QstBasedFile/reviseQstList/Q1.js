let arr = ["x", "x", "z", "z", "y", "x"];
// let arr = ["x", "a", "z", "z", "y", "x"];

let maps = {};

for (const key of arr) {
  maps[key] = (maps[key] || 0) + 1;
}

console.log(maps);

let groupObj = {};

for (const key in maps) {
  const val = maps[key];

  if (!groupObj[val]) {
    groupObj[val] = [];
  }
  groupObj[val].push(key);
}

console.log(groupObj);

let output = [];

for (let i = 0; i < arr.length; i++) {
  if (groupObj[i]) {
    for (const key of groupObj[i]) {
      for (let j = 0; j < i; j++) {
        output.push(key);
      }
    }
  }
}

console.log(output);

// second way try

let emptyArr = Array(arr.length - 1)
  .fill(0)
  .map(() => []);

for (const key in maps) {
  // console.log(key);

  emptyArr[maps[key]].push(key);
}
console.log(emptyArr);

let arrengedArr = [];

for (let i = 0; i < emptyArr.length; i++) {
  // const element = emptyArr[i];
  // console.log(element);

  for (const key of emptyArr[i]) {
    // console.log(emptyArr);

    for (let j = 0; j < i; j++) {
      arrengedArr.push(key);
    }
  }
}

console.log("arrengedArr", arrengedArr);



//third way i will see it later



let unique = [];
let count = [];

for (let ch of arr) {
  let idx = unique.indexOf(ch);

  if (idx === -1) {
    unique.push(ch);
    count.push(1);
  } else {
    count[idx]++;
  }
}

let result = [];

for (let f = 1; f <= arr.length; f++) {
  for (let i = 0; i < count.length; i++) {
    if (count[i] === f) {
      for (let k = 0; k < f; k++) {
        result.push(unique[i]);
      }
    }
  }
}

console.log(result);


