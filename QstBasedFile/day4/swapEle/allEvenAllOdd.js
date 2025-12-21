//Separate even and odd numbers

let arr = [3, 1, 2, 4];



let left = 0;
let right = arr.length - 1;

while (left < right) {
  if (arr[left] % 2 === 0) {
    left++;
  } else if (arr[right] % 2 !== 0) {
    right--;
  } else {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

console.log(arr);















// Count number of 0s, 1s, and 2s
let arr1 = [0, 2, 1, 2, 0];

let freq = {};

for (let i = 0; i < arr1.length; i++) {
  freq[arr1[i]] = (freq[arr1[i]] || 0) + 1;
}

console.log(freq);
