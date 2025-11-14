let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, 30];
let arr3 = [100, 200];

function arrMixOneandOne(...arrs) {
  let output = [];

  let arrTotalLength = Math.max(...arrs.map((arr) => arr.length));
  console.log(arrTotalLength);

  for (let i = 0; i < arrTotalLength; i++) {
    arrs.forEach((arr) => {
      console.log(arr, "arr value i value", i);

      if (i < arr.length) {
        output.push(arr[i]);
      }
    });
  }

  return output;
}

// console.log(arrMixOneandOne(arr1, arr2, arr3));

function arrMixOneandOneRight(...arrs) {
  let output = [];
  let arrToltalLenght = Math.max(...arrs.map((arr) => arr.length));

  for (let i = 0; i < arrToltalLenght; i++) {
    arrs.forEach((arr) => {
      console.log("arr val", arr);

      let indexFromRigh = arr.length - 1 - i;
      // console.log(indexFromRigh);

      if (indexFromRigh >= 0) {
        output.push(arr[indexFromRigh]);
      }
    });
  }

  return output;
}

// console.log(arrMixOneandOneRight(arr1, arr2, arr3));

function arrMixOneLeftRestRight(...arrs) {
  let output = [];
  let arrToltalLenght = Math.max(...arrs.map((arr) => arr.length));

  for (let i = 0; i < arrToltalLenght; i++) {
    arrs.forEach((arr, index) => {
      console.log("arr val", arr);

      if (index === 0) {
        output.push(arr[i]);
      } else {
        let indexFromRigh = arr.length - 1 - i;
        // console.log(indexFromRigh);

        if (indexFromRigh >= 0) {
          output.push(arr[indexFromRigh]);
        }
      }
    });
  }

  return output;
}

// console.log(arrMixOneLeftRestRight(arr1, arr2, arr3));

function arrMixFirstSecondLeftRestRight(...arrs) {
  let output = [];
  let arrToltalLenght = Math.max(...arrs.map((arr) => arr.length));

  for (let i = 0; i < arrToltalLenght; i++) {
    arrs.forEach((arr, index) => {
      console.log("arr val", arr);

      if (index === 0 || index === 2) {
        if (i < arr.length) {
          output.push(arr[i]);
        }
      } else {
        let indexFromRigh = arr.length - 1 - i;
        // console.log(indexFromRigh);

        if (indexFromRigh >= 0) {
          output.push(arr[indexFromRigh]);
        }
      }
    });
  }

  return output;
}

// console.log(arrMixFirstSecondLeftRestRight(arr1, arr2, arr3));

function mixN_Array(...arrays) {
  let output = [];

  let getLength = Math.max(...arrays.map((arr) => arr.length));
  // console.log(getLength);

  for (let i = 0; i < getLength; i++) {
    // console.log("value of iii", i);

    for (const arrs of arrays) {
      console.log("arrsss", arrs[i]);
      if (i < arrs.length) {
        output.push(arrs[i]);
      }
    }
  }

  return output;
}

// console.log(mixN_Array(arr1, arr2));

function mix_towEleOf_both_arr(chukingNoOf, ...arrays) {
  let output = [];

  let getLength = Math.max(...arrays.map((arr) => arr.length));

  for (let i = 0; i < getLength; i += chukingNoOf) {
    // console.log("value of iii", i);

    for (const arrs of arrays) {
      //   console.log(i,"arrs...", arrs);
      let chunkPart = arrs.slice(i, i + chukingNoOf);
      console.log(chukingNoOf, "chunkPartchunkPart", chunkPart);

      output.push(...chunkPart);
    }
  }

  return output;
}

// console.log(mix_towEleOf_both_arr(2, arr1, arr2));

function mix_customChunks(chunkSizes, ...arrays) {
  let output = [];

  let maxLen = Math.max(...arrays.map((arr) => arr.length));

  for (let i = 0; i < maxLen; i++) {
    arrays.forEach((arr, index) => {
      let chunkSize = chunkSizes[index] || 1;
    //   console.log("chunkSize", chunkSize);

      let chunkEle = arr.slice(i, i + chunkSize);
    //   console.log("chunkchunk -", chunkEle);
      output.push(...chunkEle);
    });

    i += Math.max(...chunkSizes) - 1;

    // console.log("i value", i);
    
  }

  return output;
}

console.log(mix_customChunks([2, 1], arr1, arr2, arr3));
