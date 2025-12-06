// let a = 5;
// let b = 10;

// console.log("aaaaaaaaa--------", a);
// console.log("bbbbbbbbb--------", b);

// let temp = a;

// console.log("tempppppp--------", temp);

// a = b;

// console.log("a val is  =  to  b val--------", a);
// console.log("bbbbbbbbb--------", b);

// b = temp;

// console.log("b val is = a val--------", b);

// Q1 — Simple Variable Swap
let x = 3;
let y = 7;

let temp = x;
console.log("befor swap x and y value", x, y);
console.log(x, "fgfdhjghdf", temp);

x = y;

y = temp;

console.log("after swap x and y value", x, y);

// Q2 — Swap Two Array Elements

let arr = [10, 20, 30];

let temp1 = arr[0];

// console.log( arr[0],"temp1", temp1);

arr[0] = arr[2];
arr[2] = temp1;

console.log("arr----", arr);

// Q3 — One Pass of Bubble Sort

let arr1 = [5, 1, 4];

for (let i = 0; i < arr1.length; i++) {
 for (let j = 0; j < arr1.length - 1; j++) {
  if (arr1[j] > arr1[j + 1]) {
    let temp = arr1[j];      
    arr1[j] = arr1[j + 1];
    arr1[j + 1] = temp;
  }
}
}
console.log("arrarrarr", arr1);

// Q4 — Fix the Wrong Swap Code

let arr2 = [9, 3];
let temp2 = arr2[0];
arr2[0] = arr2[1];
arr2[1] = temp2;

console.log("arr2", arr2);

let arr3 = ["banana", "Apple", "grape", "cherry"];

for (let i = 0; i < arr3.length; i++) {
  for (let k = 0; k < arr3.length - 1; k++) {
    if (arr3[k].toLowerCase() > arr3[k + 1].toLowerCase()) {
      const temp = arr3[k];
      arr3[k] = arr3[k + 1];
      arr3[k + 1] = temp;
    }
  }
}

console.log("arr3-----", arr3);







