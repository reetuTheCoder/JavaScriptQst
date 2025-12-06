let arr = [4, 1, 7, 3, 2];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];

      console.log(arr[i], "dfdsfj", temp);

      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log("arr------------", arr);

let arr1 = ["x", "y", "z", "x", "x", "y"];

let occer = {};

for (let i = 0; i < arr1.length; i++) {
  if (occer[arr1[i]]) {
    occer[arr1[i]]++;
  } else {
    occer[arr1[i]] = 1;
  }
}
console.log(occer);

let keysArr = [];

for (const key in occer) {
  keysArr.push(key);
}
console.log("keysArr", keysArr);

for (let i = 0; i < keysArr.length; i++) {
  for (let j = 0; j < keysArr.length - 1; j++) {
    if (occer[keysArr[j]] < occer[keysArr[j + 1]]) {
      let temp = keysArr[j];
      // console.log(temp);

      keysArr[j] = keysArr[j + 1];
      keysArr[j + 1] = temp;
    }
  }
}

let output = [];

for (let i = 0; i < keysArr.length; i++) {
  const counts = occer[keysArr[i]];

  console.log("countscounts", counts);

  for (let k = 0; k < counts; k++) {
    output.push(keysArr[i]);
  }
}

console.log("output", output);

let arr2 = ["banana", "Apple", "grape", "cherry"];

for (let i = 0; i < arr2.length; i++) {
  for (let k = 0; k < arr2.length; k++) {
    if (arr2[k] < arr2[k + 1]) {
      let temp = arr2[k];

      arr2[k] = arr2[k + 1];
      arr2[k + 1] = temp;
    }
  }
}

console.log("arr2----------", arr2);










let arr3 = [4, 6, 2, 4, 3, 2, 2, 6];

let freq = {};

for (let i = 0; i < arr3.length; i++) {
  if (freq[arr3[i]]) {
    freq[arr3[i]]++;
  } else {
    freq[arr3[i]] = 1;
  }
}

console.log("freq", freq);

let des_Ord = [];

for (const key in freq) {
  des_Ord.push(key);

  // console.log(freq[key]);

  // console.log(key, "des_Ord", freq[key]);
}

for (let i = 0; i < des_Ord.length; i++) {
  for (let j = 0; j < des_Ord.length - 1; j++) {
    if (
      freq[des_Ord[j]] < freq[des_Ord[j + 1]] ||
      (freq[des_Ord[j]] === freq[des_Ord[j + 1]] && des_Ord[j] > des_Ord[j + 1])
    ) {
      let temp = des_Ord[j];
      des_Ord[j] = des_Ord[j + 1];
      des_Ord[j + 1] = temp;
    }
  }
}

let orders = []
for (let i = 0; i < des_Ord.length; i++) {
  const element = freq[des_Ord[i]];

  for (let k = 0; k < element; k++) {
    orders.push(Number(des_Ord[i]))
    
  }

  console.log(des_Ord[i], "ele", element, "times");
}


console.log("orders", orders);
