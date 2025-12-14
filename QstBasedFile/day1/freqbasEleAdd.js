let arr = ["x", "x", "z", "z", "y", "x"];

// output ["y","z","z","x","x","x"]

// steps
// count freq
// store keys into obj array
// based on the key and value add data into new array

let freq = {};
for (let i = 0; i < arr.length; i++) {
  if (freq[arr[i]]) {
    freq[arr[i]]++;
  } else {
    freq[arr[i]] = 1;
  }
}
console.log(freq);

let objs = {};

for (const key in freq) {
  let value = freq[key];
  console.log("value", value);
  if (!objs[value]) {
    objs[value] = [];
  }
  objs[value].push(key);
}

let output = [];

for (let i = 0; i < arr.length; i++) {
  if (objs[i]) {
    // console.log("objs[i]", objs[i]);

    for (const key of objs[i]) {
    //   console.log("key---------", key);
      for (let j = 0; j < i; j++) {
        // console.log("j and i----------------------", j, i);

        output.push(key);
      }
    }
  }
}
console.log("objs", objs);
console.log("output", output);
