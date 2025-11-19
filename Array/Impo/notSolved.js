let a = ["red", "green", "pink"];
let b = ["green", "blue"];
//// Difference between two arrays
function diffArr(arr1, arr2) {
  return arr1.filter((ele) => !arr2.includes(ele));
}
console.log(diffArr(a, b));

function withSetDiff(arr1, arr2) {
  let makeSet = new Set(arr2);

  return arr1.filter((ele) => !makeSet.has(ele));
}

console.log(withSetDiff(a, b));

function byLoopDiff(arr1, arr2) {
  let output = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      output.push(arr1[i]);
    }
  }
  return output;
}
console.log(byLoopDiff(a, b));


//// Delete every second element
let arr = ["red", "green", "pink", "yellow", "blue"];

let afterdeleteVal = arr.filter((ele, index) => index % 2 === 0);
console.log(afterdeleteVal);

let everyThirdELe = arr.filter((ele, index) => (index + 1) % 3 !== 0);

console.log(everyThirdELe);


let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if ((i +1) % 3 !== 0) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

