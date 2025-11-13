let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 7, 8, 9];
let arr3 = [10, 11, 12, 13];

function mixArrayOneByOne(arr1, arr2) {
  let output = [];
  let arrIndex = 0;

  for (let i = 0; i < arr1.length; i++) {
    output.push(arr1[i]);

    if (arrIndex < arr2.length) {
      output.push(arr2[arrIndex]);
    }
    arrIndex++;
    console.log("dfjdnf", arrIndex);
  }

  return output;
}

// console.log(mixArrayOneByOne(arr1, arr2));

// function mixArrayThreeByOne(arr1, arr2) {
//   let output = [];
//   let arrIndex = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     output.push(arr1[i]);

//     if ((i + 1) % 3 === 0 && arrIndex < arr2.length) {
//       output.push(arr2[arrIndex]);

//       arrIndex++;
//       console.log("dfjdnf", arrIndex);
//     }
//   }

//   return output;
// }

// console.log(mixArrayThreeByOne(arr1, arr2));

function mixArrayThreeByOne(arr1, arr2) {
  let output = [];
  let arrIndex = 0;

  for (let i = 0; i < arr1.length; i++) {
    output.push(arr1[i]);

    if ((i + 1) % 3 === 0 && arrIndex < arr2.length) {
      output.push(arr2[arrIndex]);

      arrIndex++;
      console.log("dfjdnf", arrIndex);
    }
  }

  let afterMix = output;

  //   return afterMix  /// it will give you mixed value

  return afterMix.filter((num, index) => afterMix.indexOf(num) !== index); /// will return you duplicate value form mix array
}

// console.log(mixArrayThreeByOne(arr1, arr2));




function mixN_Array(...arrays) {
  let output = [];

  let getLength = Math.max(...arrays.map((arr) => arr.length));
  // console.log(getLength);

  for (let i = 0; i < getLength; i++) {
    // console.log("value of iii", i);

    for (const arrs of arrays) {
      // console.log("arrsss", arrs);
      if (i < arrs.length) {
        output.push(arrs[i]);
      }
    }
  }

  return output
}
console.log("arr1", arr1, "arr2", arr2, "arr3", arr3);

console.log(mixN_Array(arr1, arr2, arr3));
