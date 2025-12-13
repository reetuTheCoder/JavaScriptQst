// 1. Rotate an array by k positions

let arr = [1, 2, 3, 4, 5];

let k = 2;
k = k % arr.length;

let rotatedArr = arr.slice(-k).concat(arr.slice(0, -k));

console.log(rotatedArr);

// 2. Find duplicates in an array

let allArr = [1, 2, 3, 2, 4, 5, 1];

let dulicateVals = [];
let freq = {};

for (const key of allArr) {
  freq[key] = (freq[key] || 0) + 1;
}

for (const key in freq) {
  if (freq[key] > 1) {
    dulicateVals.push(Number(key));
  }
}
console.log(dulicateVals);

// 3. Find the intersection of two arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let fre = {};

// let intersection = [] ;

// for (const key of arr1) {
//   fre[key] = true
// }

// for (const key of arr2) {
//   if (fre[key]) {
//     intersection.push(key);
//     fre[key] = false
//   }
// }

// console.log(intersection);

let setArr = new Set(arr1);

// console.log(setArr);

let intersection = arr2.filter((num) => setArr.has(num));
console.log(intersection);

// 4. Find missing numbers in a sequence

// let arrEle = [1, 2, 4, 6];
let arrEle = [1, 2, 4];

let totalExpEle = 4;

let occer = Array(totalExpEle + 1).fill(0);
console.log("occer", occer);

for (const key of occer) {
  occer[key] = 1;
}

let missing = [];

for (let i = 0; i <= totalExpEle; i++) {
  if (occer[i] === 0) {
    missing.push(i);
  }
}

console.log("mi", missing);

// 5. Move all zeros to the end

let moveArr = [0, 1, 0, 3, 12];

let startEle = 0;

// for (let i = 0; i < moveArr.length; i++) {
//   if (moveArr[i] !== 0) {
//     // console.log("moveArr[startEle]", moveArr[startEle] = moveArr[i] );

//     moveArr[startEle] = moveArr[i];
//     startEle++;
//   }
// }

// for (let k = startEle; k < moveArr.length; k++) {
//   // console.log("  moveArr[k]",   moveArr[k]);

//   moveArr[k] = 0;
// }

for (let i = 0; i < moveArr.length; i++) {
  if (moveArr[i] !== 0) {
    // console.log("moveArr[startEle]", moveArr[startEle] = moveArr[i] );

    let temp = moveArr[startEle];
    moveArr[startEle] = moveArr[i];
    moveArr[i] = temp;
    startEle++;
  }
}

console.log(moveArr, "st", startEle);

// let arr_val = ["x", "y", "x", "z", "x", "z"];

// let occerEle = {};

// for (const key of arr_val) {
//   occerEle[key] = (occerEle[key] || 0) + 1;
// }

// let obj = {};

// for (const key in occerEle) {
//   let val = occerEle[key];
//   console.log("val", val);
//   if (!obj[val]) {
//     obj[val] = [];
//     obj[val].push(key);
//   }
// }

// let output = [];

// for (let i = 0; i < arr_val.length; i++) {
//   if (obj[i]) {
//     // console.log("obj[i]",obj[i]);

//     for (const key of obj[i]) {
//       for (let j = 0; j < i; j++) {
//         output.push(key);
//       }
//     }
//   }
// }

// console.log("obj", obj);
// console.log("output", output);

let arr_val = ["x", "y", "x", "z", "x", "z", "y", "w"];

let occerEle = {};

for (const key of arr_val) {
  occerEle[key] = (occerEle[key] || 0) + 1;
}

console.log("occerEle", occerEle);

let obj = {};

for (const key in occerEle) {
  let val = occerEle[key];
  // console.log("val", val);
  if (!obj[val]) {
    obj[val] = [];
    // obj[val].push(key);
  }

  // before push check order
  let checkOrder = false;
  for (let i = 0; i < obj[val].length; i++) {
    if (key > obj[val][i]) {
      console.log("obj[val][i]", key > obj[val][i]);
      obj[val].splice(i, 0, key);
      checkOrder = true;
      break;
    }
  }

  if (!checkOrder) {
    obj[val].push(key);
  }
}

let output = [];

for (let i = 0; i < arr_val.length; i++) {
  if (obj[i]) {
    // console.log("obj[i]",obj[i]);

    for (const key of obj[i]) {
      for (let j = 0; j < i; j++) {
        output.push(key);
      }
    }
  }
}

console.log("obj", obj);
console.log("output", output);
