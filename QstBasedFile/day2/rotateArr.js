let arr = ["x", "x", "z", "z", "y", "x"];

let k = 2;

// k = arr.length;
// console.log(k);

let subarr = arr.slice();
// console.log(arr,"fdgjfdjgd", subarr);
// let rotatedArr = subarr.slice(-k).concat(arr.slice(0,-k))
// console.log(rotatedArr);

for (let i = 0; i < k; i++) {
  const lastEle = subarr[subarr.length - 1];
  //   console.log("ele", lastEle);

  for (let j = subarr.length - 1; j >= 0; j--) {
    subarr[j] = subarr[j - 1];

    subarr[0] = lastEle;
  }
}

console.log(subarr);
