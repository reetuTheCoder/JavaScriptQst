// Q1 — Count How Many Pairs Have Even Sum

let arr = [1, 2, 3, 4, 5];

// 1,3 = e
// 1,5 = e
// 2,4 = e
// 5,3 = e

let evenPair = 0;

for (let i = 0; i < arr.length; i++) {
  const outer = arr[i];

  for (let p = i + 1; p < arr.length; p++) {
    const inner = arr[p];

    let total = outer + inner;
    if (total % 2 === 0) {
      evenPair++;
    }
  }
}
console.log(evenPair);

// Q2 — Find All Triplets With Sum = 10

let arr1 = [1, 2, 3, 4, 5, 6];

let target = 10;

for (let i = 0; i < arr1.length; i++) {
  // console.log("iiiii", i);

  for (let j = i + 1; j < arr1.length; j++) {
    //   console.log("jjjjjj", j);

    for (let k = j; k < arr1.length; k++) {
      //    console.log("kkkkk", k);

      let total = arr1[i] + arr1[j] + arr1[k];

      //    console.log(total);

      if (total === target) {
        console.log("sum", arr1[i], arr1[j], arr1[k]);
      }
    }
  }

  //  console.log("summmm", sum);
}

// Q4 — Find the Most Frequent Element (No Object)

let arr2 = [1, 2, 2, 3, 3, 3, 4];

let maxCount = 0;
let maxFreq = null;

for (let i = 0; i < arr2.length; i++) {
  let count = 0;

  for (let j = i; j < arr2.length; j++) {
    if (arr2[i] === arr2[j]) {
      count++;
    }
  }

  if (count > maxCount) {
    maxCount = count;

    maxFreq = arr2[i];
  }
}

console.log(maxCount, "maxFreq", maxFreq);
//
