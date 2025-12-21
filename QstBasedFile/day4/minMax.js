const arr = [10, 5, 8, 1, 9];

let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(max);
console.log(min);

let minmax = arr.reduce(
  (acc, val) => {
    if (val > acc.max) {
      acc.max = val;
    }
    if (val < acc.min) {
      acc.min = val;
    }
    return acc;
  },
  { min: arr[0], max: arr[0] }
);

console.log(minmax);

const arr1 = [0, 1, 0, 3, 12];

let index = 0;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== 0) {
    arr1[index] = arr1[i];
    console.log(arr1[index], arr1[i]);
    index++;
  }
}

while (index < arr1.length) {
  arr1[index] = 0;
  index++;
}

console.log(index);
console.log(arr1);
