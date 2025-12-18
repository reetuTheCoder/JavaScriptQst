// let arr = ["x", "x", "z", "z", "y", "x"];
let arr = ["x", "y", "z",];


let inc = true;

let dec = true;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    dec = false;
  }
  if (arr[i] < arr[i - 1]) {
    inc = false;
  }
}

console.log(inc || dec);
