let arr = ["x", "x", "z", "z", "y", "x", "z"];

// output ["y","z","z","x","x","x"]

// steps----
// count freq
// create an obj
// grouped data base on freq value
// if the 2 kyes has the same value check alphabetical order then add into the array

// based on the key and value add data into new array

let freq = {};
for (let i = 0; i < arr.length; i++) {
  if (freq[arr[i]]) {
    freq[arr[i]]++;
  } else {
    freq[arr[i]] = 1;
  }
}
// console.log(freq);

let objs = {};
// step - 2 group arr ele base on freq value
for (const key in freq) {
  const value = freq[key];
  console.log(value);

  if (!objs[value]) {
    objs[value] = [];
  }

  // objs[value].push(key) // here 2 ele has same freq val so check alphabetical order below

  // step - 3

  let alphaOrde = false;

  // console.log("objs[value]",objs[value].length);

  for (let i = 0; i < objs[value].length; i++) {
    // console.log(objs[value][i], "keys", key);

    if (key < objs[value][i]) {
      objs[value].splice(i, 0, key);
      alphaOrde = true;
      break;
    }
  }

  if (!alphaOrde) {
    objs[value].push(key);
    // console.log("y goes from here");
  }
}

let output = [];
for (let i = 1; i <= arr.length; i++) {
  // console.log(objs[i],"objs----------------", objs);
  if (objs[i]) {
    for (const key of objs[i]) {
      for (let j = 0; j < i; j++) {
        output.push(key);
      }
    }
  }
}
console.log("objs", objs);

console.log("output", output);
