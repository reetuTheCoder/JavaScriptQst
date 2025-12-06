// Q1 — Find all duplicate pairs

let arr = [1, 2, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  for (let j = 0; j < i; j++) {
    const j_val = arr[j];

    if (element !== j_val) {
      continue;
    }

    console.log(element, j_val);
  }
}

// Q2 — Count total duplicate values

let totalDuplVal = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] === arr[j]) {
      totalDuplVal++;
    }
  }
}
console.log("totalDuplVal", totalDuplVal);

// Q3 — Frequency using only nested loops (NO object allowed)

let arr1 = ["a", "b", "a", "c", "b"];

let unq_value = [];
for (let i = 0; i < arr1.length; i++) {
  let isUnque = false;

  for (let j = 0; j < unq_value.length; j++) {
    if (arr1[i] === arr1[j]) {
      isUnque = true;
      break;
    }
  }

  //   console.log("isUnque:", isUnque);

  if (isUnque) {
    continue;
  }

  let count = 0;

  for (let k = 0; k < arr1.length; k++) {
    if (arr1[i] === arr1[k]) {
      count++;
    }
  }

  unq_value.push(arr1[i]);

  console.log(arr1[i], "jgfhf", count);
}

// Q5 Sort the array in ascending order (Bubble Sort logic)

// let arr2 = [5, 1, 4, 2, 3];
let arr2 = ["a", "v", "c", "b", "d"];

for (let i = 0; i < arr2.length; i++) {
  // console.log("arr2[i]-----------", arr2[i]);

  for (let j = 0; j < arr2.length - 1; j++) {
    //  console.log("arr2[j]-----------", arr2[j]);

    if (arr2[j] > arr2[j + 1]) {
      console.log(arr2[j], "arr2[j]---", arr2[j + 1]);
      let j_val = arr2[j];

      arr2[j] = arr2[j + 1];

      console.log(arr2[j], "arr2[j]---1111111111111", arr2[j + 1]);
      arr2[j + 1] = j_val;

      console.log(arr2[j], "arr2[j]---22222222222", j_val);
    }
  }
}

console.log("arr2arr2arr2--------", arr2);
