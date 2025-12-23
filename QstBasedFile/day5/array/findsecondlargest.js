let arr = [1, 2, 4, 5, 6];

let first = 0;
let second = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    second = first;
    first = arr[i];
  } else if (second > arr[i] && arr[i] > first) {
    second = arr[i];
  }
}
console.log(second);
