// add all z at the end of array

let arr = ["x", "x", "z", "z", "y", "x"];

let z_pos = 0;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "z") {
    z_pos++;
  } else {
    newArr.push(arr[i]);
  }
}

for (let j = 0; j < z_pos; j++) {
  // console.log("dfjdf", j);

  newArr.push("z");
}
console.log(z_pos);
console.log("newArr", newArr);

// add all z at the front of array

let target = "z";
let frontArr = [];
let restArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    frontArr.push(arr[i]);
  } else {
    restArr.push(arr[i]);
  }
}
console.log([...frontArr, ...restArr]);

let num = [1, 2, 10, 11, 12, 13];

let targets = [12, 13];
let targetArr = [];
let result = [];
let inserted = false;

for (let i = 0; i < num.length; i++) {
  let isTargetMatch = true;
  //   console.log("num[i]", num[i]);

  for (let j = 0; j < targets.length; j++) {
    // console.log("targets[j]", targets[i]);
    if (num[i] === targets[j]) {
      isTargetMatch = true;

      break;
    }
  }

  if (isTargetMatch) {
    targetArr.push(num[i]);
    console.log("11111");
  } else if (num[i] === 11 && !inserted) {
    for (let k = 0; k < targetArr.length; k++) {
      console.log("targetArr[k]", targetArr[k]);
      console.log("22222");
      result.push(targetArr[k]);
    }
    inserted = true;
    result.push(num[i]);
  } else {
    console.log("333333");
    result.push(num[i]);
  }
}

if (!inserted) {
    for (let k = 0; k < targetArr.length; k++) {
  result.push(targetArr[k]);
}
}
console.log(result, "targetArr", targetArr);
