let arr = [3, 1, 3, 2, 1, 3];


let newArr = []
let occer = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log("occer", occer);

let valuesLength = Object.values(occer).length;

console.log("valuesvalues", valuesLength);


for (let i = 0; i < valuesLength; i++) {
  let maxCount = 0;
  let maxKeys = null;

  for (const key in occer) {
    console.log(key, " keysss " ,typeof key);
    if (occer[key] > maxCount) {
      maxCount = occer[key];
      maxKeys = key;
    }
  }
  console.log(" maxCountmaxCount ", maxCount);
  console.log(" maxKeysmaxKeys ", maxKeys);


  for (let j = 0; j < maxCount; j++) {
    console.log("jjjjjjjjjjj", j);
    console.log("maxKey11111", maxKeys);
    newArr.push(Number(maxKeys))
    
  }
  delete occer[maxKeys]
}

console.log(newArr);
