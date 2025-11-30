let arr = [1, 3, 2, 3, 1, 3, 2];
let newArr = [];

let arrFreq = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(arrFreq);

let maxOccerCount = Math.max(...Object.values(arrFreq));


let emptyBucket = Array.from({ length: maxOccerCount + 1 }, () => []);
console.log("emptyBucket ", emptyBucket);

// for (const key in arrFreq) {
//   if (arrFreq[key] > maxOccerCount) {
//     maxOccerCount = arrFreq[key];
//   }
// }

// console.log("maxOccerCount ", maxOccerCount);




for (const key in arrFreq) {
  let val = arrFreq[key];
  console.log("vallllll", val);
  emptyBucket[val].push(Number(key))
}
console.log("emptyBucket1111 ", emptyBucket);

for (let i = 1; i <= maxOccerCount; i++) {
   for (const key of emptyBucket[i]) {
     for (let j = 0; j < i; j++) {
      newArr.push(key)
      
     }
   }
}

console.log("newArr", newArr);
