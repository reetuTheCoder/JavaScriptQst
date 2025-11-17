let arr1 = [1, 2, 3, 4, 5];
let arr2 = [10, 20, 30];
let arr3 = [100, 200, 300, 400];

function mixEleOnebyOne(...arrays) {
  let output = [];

  let maxLen = Math.max(...arrays.map((arr) => arr.length));
  for (let i = 0; i < maxLen; i++) {
    for (const arrs of arrays) {
      console.log("arrs", arrs[i]);

      if (i < arrs.length) {
        output.push(arrs[i]);
      }
    }
  }
  return output;
}

// console.log(mixEleOnebyOne(arr1, arr2, arr3));

function mixEleTwobyOne(chukingNoOf, ...arrays) {
  let output = [];

  let maxLen = Math.max(...arrays.map((arr) => arr.length));
  for (let i = 0; i < maxLen; i++) {
    arrays.forEach((arr, index) => {
      let chunkPartIndex = chukingNoOf[index] || 1;

      let chunkedEle = arr.slice(i, i + chunkPartIndex);

      console.log(chunkedEle, "chunkPartIndex", chunkPartIndex);

      output.push(...chunkedEle);
    });
  }
  return output;
}

// console.log(mixEleTwobyOne([2,1],arr1, arr2, arr3));

function mixEleOnebyOneRight(...arrays) {
  let output = [];

  let maxLen = Math.max(...arrays.map((arr) => arr.length));
  for (let i = 0; i < maxLen; i++) {
    for (const arrs of arrays) {
      console.log("arrs", arrs[i]);

      let rightIndex = arrs.length - 1 - i;

      console.log("rightIndex", rightIndex);

      if (rightIndex >= 0) {
        output.push(arrs[rightIndex]);
      }
    }
  }
  return output;
}

// console.log(mixEleOnebyOneRight(arr1, arr2, arr3));


// let see 
function mixEleTwobyOneRight(chukingNoOf, ...arrays) {
  let output = [];

  let maxLen = Math.max(...arrays.map((arr) => arr.length));
  for (let i = 0; i < maxLen; i++) {
    arrays.forEach((arr, index) => {
      let chunkPartIndex = chukingNoOf[index] || 1;

      let rightIndex = arr.length - (i + 1) * chunkPartIndex;
      let endIndex = arr.length - i * chunkPartIndex;

      //  console.log(endIndex, "rightIndex xxxxxxxxx", rightIndex);

      if (rightIndex < arr.length && endIndex > 0) {
        rightIndex = Math.max(0, rightIndex);
        endIndex = Math.max(arr.length, endIndex);
        let chunkedEle = arr.slice(i, i + chunkPartIndex);

        // console.log(chunkedEle, "chunkPartIndex", chunkPartIndex, "from position", rightIndex);
        output.push(...chunkedEle);
      }
    });
  }
  return output;
}

console.log(mixEleTwobyOneRight([2, 1], arr1, arr2, arr3));
