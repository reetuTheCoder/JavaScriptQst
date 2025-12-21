const arr = [10, 5, 8, 1, 9,11,12];

let first = 0;
let second = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    second = first;
    first = arr[i];
    // console.log("heys ", arr[i] > first);
  } else if (arr[i] > second && first > arr[i]) {
    second = arr[i];
  }
}

console.log(first, second);
