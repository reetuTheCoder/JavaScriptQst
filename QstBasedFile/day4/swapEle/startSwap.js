// Move all zeros to the beginning

let arr = [0, 1, 0, 3, 12];

let index = arr.length - 1;

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] !== 0) {
    arr[index] = arr[i];
    index--;
  }
}

while (index >= 0) {
  arr[index] = 0;
  index--;
}
console.log(index);

console.log(arr);
