const arr = [0, 1, 0, 3, 12];
// let arr = ["a", "b", "d","c","a"]

let index = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     arr[index] = arr[i];
//     index++;
//   }
// }

// while (index < arr.length) {
//   arr[index] = 0;
//   index++;
// }
// console.log(index);
// console.log(arr);

// push all zero between 1 and 3


let pos1 = 0;
let curPos = 0;
let pos3 = arr.length - 1;

console.log("Initial State");
console.log({ pos1, curPos, pos3, arr: [...arr] });
console.log("------------------------------------------------");

while (curPos <= pos3) {
  console.log(`Checking arr[curPos] = ${arr[curPos]} at index ${curPos}`);

  if (arr[curPos] === 1) {
    console.log("➡️ Found 1 → swap with pos1");

    [arr[pos1], arr[curPos]] = [arr[curPos], arr[pos1]];

    console.log("After swap:", [...arr]);

    pos1++;
    curPos++;

    console.log("Pointers updated:", { pos1, curPos, pos3 });

  } else if (arr[curPos] === 0) {
    console.log("➡️ Found 0 → move curPos");

    curPos++;

    console.log("Pointers updated:", { pos1, curPos, pos3 });

  } else {
    console.log(`➡️ Found ${arr[curPos]} (>1) → swap with pos3`);

    [arr[curPos], arr[pos3]] = [arr[curPos], arr[pos3]];

    console.log("After swap:", [...arr]);

    pos3--;

    console.log("Pointers updated:", { pos1, curPos, pos3 });
  }

  console.log("------------------------------------------------");
}

console.log("Final Result");
console.log({ pos1, curPos, pos3 });
console.log("Final Array:", arr);














// let pos1 = 0;
// let curPos = 0;
// let pos3 = arr.length - 1;

// while (curPos <= pos3) {
//   if (arr[curPos] === 1) {
//     [arr[pos1], arr[curPos]] = [arr[curPos], arr[pos1]];
//     pos1++;
//     curPos++;
//   } else if (arr[curPos] === 0) {
//     curPos++;
//   } else {
//     [arr[curPos], arr[pos3]] = [arr[curPos], arr[pos3]];
//     pos3--;
//   }
// }

// console.log(pos1, curPos, pos3);
// console.log(arr);
