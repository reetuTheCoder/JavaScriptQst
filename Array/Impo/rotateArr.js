let color = ["red", "green", "pink"];

//// Rotate array by N places  and Rotate right by 1

//Rotate right
let N = 1;

N = N % color.length;

// console.log(N);

let rotateArrRight = [...color.slice(-N), ...color.slice(0, color.length - N)];

// console.log(rotateArrRight);

//Rotate left

let rotateArrLeft = [...color.slice(N), ...color.slice(0, N)];

// console.log(rotateArrLeft);



function rotate(arr, N) {
  N = N % arr.length;
  

  if (N === 0) return arr;

  return [
    ...arr.slice(-N),
    ...arr.slice(0, arr.length - N)
  ];
}

console.log(rotate(color, 6));  // N=2
// console.log(rotate(["pink", "red", "green"]));     // N missing → 1
