let arr = [1, 2, 3, 4, 5];
// let n = 3;
// let len = arr.length;
// let k = n % len;

// let rotated = arr.slice(-k).concat(arr.slice(0, -k))

// console.log(rotated);

// second way by loop

// for (let i = 0; i < k; i++) {
//   let last = arr[arr.length - 1];

//   console.log(last);

//   for (let j = arr.length - 1; j> 0; j--) {
//    arr[j] = arr[j - 1]

//   }

//   arr[0] = last
// }
// console.log("Arr" , arr);

// Right rotation

let arrRight = [1, 2, 3, 4, 5];

let n = 2;
let len = arrRight.length;
let k = n % len;

for (let i = 0; i < k; i++) {
  let lastEle = arrRight[arrRight.length - 1];

  for (let j = arrRight.length - 1; j > 0; j--) {
    arrRight[j] = arrRight[j - 1];
  }

  arrRight[0] = lastEle;
}

console.log(arrRight);

// Left rotation

let leftarr = [10, 20, 30, 40, 50];

let target = 3;
let arrLen = leftarr.length;
let time = target % arrLen;

for (let i = 0; i < time; i++) {
  let firstE = leftarr[0];

  console.log(firstE);

  for (let j = 0; j < leftarr.length - 1; j++) {
    leftarr[j] = leftarr[j + 1];
  }

  leftarr[leftarr.length - 1] = firstE;
}

console.log("leftarr", leftarr);

// Rotate before a target element
// Move last 2 elements just before 4 → Result: [1,2,5,6,3,4]
let ele = [1, 2, 3, 4, 5, 6];

let targetLstEle = 2;

let insertBefore = 4;

let lastE = ele.splice(-targetLstEle);

console.log("lastE", lastE);

let indexVal = ele.indexOf(insertBefore)

console.log("indexVal", indexVal);

ele.splice(indexVal, 0, ...lastE)

console.log("ele", ele);
