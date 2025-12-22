let a = [1, 2, 3];
let b = [4, 5, 6];

let aIndx = 0;

let bIndx = b.length -1; /// it will pick from right side array
let twoEleArr = [];



//// array "a" start picking item from left and array "b" pick from right 


while (aIndx < a.length || bIndx >= 0) {
  for (let i = 0; i < 2 && aIndx < a.length; i++) {
    twoEleArr.push(a[aIndx++]);
  }

  for (let i = 0; i < 2 && bIndx >=0; i++) {
    twoEleArr.push(b[bIndx--]);
  }
}

console.log(twoEleArr);
