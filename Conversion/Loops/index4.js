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
    if (arr1[i] === unq_value[j]) {
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

// Q4 Sort the array in ascending order (Bubble Sort logic)

let arr2 = [5, 1, 4, 2];
// let arr2 = ["a", "v", "c", "b", "d"];

for (let i = 0; i < arr2.length; i++) {
  // console.log("arr2[i]-----------", arr2[i]);

  for (let j = 0; j < arr2.length - 1; j++) {
    //  console.log("arr2[j]-----------", arr2[j]);

    if (arr2[j] > arr2[j + 1]) {
      // console.log(arr2[j], "arr2[j]---", arr2[j + 1]);
      let j_val = arr2[j];

      arr2[j] = arr2[j + 1];

      // console.log(arr2[j], "arr2[j]---1111111111111", arr2[j + 1]);
      arr2[j + 1] = j_val;

      // console.log(arr2[j], "arr2[j]---22222222222", j_val);
    }
  }
}

console.log("arr2arr2arr2--------", arr2);

// Q5 — Print all subarrays (Very Important Interview Pattern)

let arr3 = [1, 2, 3];

for (let i = 0; i < arr3.length; i++) {
  for (let j = i + 1; j <= arr3.length; j++) {
    console.log(arr3.slice(i, j));
  }
}

// Q6 — Find all pairs whose sum = 5

let arr5 = [1, 4, 2, 3, 5];
let target = 5;

for (let i = 0; i < arr5.length; i++) {
  let sum = 0;
  for (let j = i; j < arr5.length; j++) {
    sum += arr5[j];
    // console.log(sum,"arr5[j]arr5[j]", arr5[j]);

    if (sum === target) {
      console.log("fdng", arr5.slice(i, j + 1));
    }
  }
}

// Q7 — Compare every element with every element (Matrix Thinking)

let arr4 = [10, 20, 30];

for (let i = 0; i < arr4.length; i++) {
  //  console.log(arr4[i],"is smaller than",);
  for (let j = 0; j < arr4.length; j++) {
    if (i === j) {
      continue;
    }

    if (arr4[i] < arr4[j]) {
      console.log(arr4[i] + " is smaller than " + arr4[j]);
    } else {
      console.log(arr4[i] + " is greater than " + arr4[j]);
    }
  }
}
