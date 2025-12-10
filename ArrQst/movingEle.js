// all zero should move at the end
//all zero should move at the start
// all zero should move  between 1 and 2
// 1 and 2 should move at the end and start

let orgiginalArr = [10, 12, 0, 1, 2, 0, 3];
let zeroEnd = [10, 12, 0, 1, 2, 0, 3];

let post = 0;
let targetMoveEnd = 0;

for (let i = 0; i < zeroEnd.length; i++) {
  if (zeroEnd[i] !== targetMoveEnd) {
    let temp = zeroEnd[post];

    // console.log("temp value", temp);

    zeroEnd[post] = zeroEnd[i];

    zeroEnd[i] = temp;
    post++;
  }
}

// console.log(zeroEnd);

let zeroStart = [10, 12, 0, 1, 2, 0, 3, 0];

let postStart = 0;
let targetMoveStart = 0;

for (let i = 0; i < zeroStart.length; i++) {
  if (zeroStart[i] === targetMoveStart) {
    let temp = zeroStart[postStart];

    // console.log("temp value1111111", temp);

    zeroStart[postStart] = zeroStart[i];

    zeroStart[i] = temp;
    postStart++;
  }
}

// console.log("zeroStart", zeroStart);

let moveZero = [10, 12, 0, 1, 2, 0, 3, 0];

let moveEle = [];

// Step: collect zeros (remove from array and push into moveEle)
for (let i = 0; i < moveZero.length; i++) {
  if (moveZero[i] === 0) {
    moveEle.push(0);
    moveZero.splice(i, 1);
    i--;
  }
}

console.log("  moveZero (no zeros):", moveZero);
console.log("  moveEle (collected zeros):", moveEle);

let insertIndex = moveZero.indexOf(2);

moveZero.splice(insertIndex, 0, ...moveEle);
console.log("Final result ->", moveZero);

let moveEleStart = [10, 12, 0, 1, 2, 0, 3];
let items = [];
let moveItem = [1, 2];

for (let i = 0; i < moveEleStart.length; i++) {
  if (moveItem.includes(moveEleStart[i])) {
    items.push(moveEleStart[i]);
    moveEleStart.splice(i, 1);
    i--
  }
}

// let indexVal = moveEleStart.indexOf(0);
console.log("moveItem",moveItem);

moveEleStart.splice(0, 0, ...moveItem) // at the start
// moveEleStart.splice(moveEleStart.length, 0, ...moveItem) // at the end 

console.log("itemsitems---------------", items);
console.log("moveEleStart------------", moveEleStart);
