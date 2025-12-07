let arr = ["Apple", "banana", "apple", "Cherry", "banana", "cherry", "banana"];

let freq = {};

let groupArr = {};

for (let i = 0; i < arr.length; i++) {
  let newArr = arr[i].toLowerCase();
  //  console.log(newArr);

  if (freq[newArr]) {
    freq[newArr]++;
    groupArr[newArr].push(arr[i]);
  } else {
    freq[newArr] = 1;
    groupArr[newArr] = [arr[i]];
  }
}

console.log("freq--", freq);
// console.log("groupArr",groupArr);

let keys = [];
for (const key in freq) {
  keys.push(key);
}
// console.log("keys--", keys);

for (let i = 0; i < keys.length; i++) {
  for (let j = 0; j < keys.length - 1; j++) {
    if (
      freq[keys[j]] < freq[keys[j + 1]] ||
      (freq[keys[j]] === freq[keys[j + 1]] && keys[j] > keys[j + 1])
    ) {
      let temp = keys[j];

      keys[j] = keys[j + 1];
      keys[j + 1] = temp;
    }
  }
}

let output = [];

for (let i = 0; i < keys.length; i++) {
  const items = keys[i];

  // console.log(groupArr[items]);

  for (let k = 0; k < groupArr[items].length; k++) {
    output.push(groupArr[items][k]);
  }
  console.log(groupArr[items].length, "items", items);
}

console.log("output---", output);

// Q1 — Case-Insensitive Frequency (Descending Only)

let arr1 = ["Dog", "cat", "dog", "CAT", "bird", "dog"];

let freqOcc = {};
let grop_arr = {};

for (let i = 0; i < arr1.length; i++) {
  let arrVal = arr1[i].toLowerCase();

  console.log("arrVal", arrVal);

  if (freqOcc[arrVal]) {
    freqOcc[arrVal]++;
    grop_arr[arrVal].push(arr1[i]);
  } else {
    freqOcc[arrVal] = 1;
    grop_arr[arrVal] = [arr1[i]];
  }
}

console.log("freqOccfreqOcc", freqOcc);
console.log("grop_arrgrop_arr", grop_arr);

let arr_ele = [];

for (const key in freqOcc) {
  arr_ele.push(key);
}

console.log(arr_ele);

for (let i = 0; i < arr_ele.length; i++) {
  for (let j = 0; j < arr_ele.length - 1; j++) {
    if (arr_ele[j] < arr_ele[j + 1]) {
      const temp = arr_ele[j];

      arr_ele[j] = arr_ele[j + 1];
      arr_ele[j + 1] = temp;
    }
  }
}

let results = [];

for (let i = 0; i < arr_ele.length; i++) {
  const element = arr_ele[i];

  for (let k = 0; k < grop_arr[element].length; k++) {
    results.push(grop_arr[element][k]) ;

  }

}

console.log("resultsresults",results);
