let color = ["red", "green", "pink", "yellow", "blue"];

// Shuffle the array (Fisher–Yates)

for (let i = color.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  //    console.log(j);

  [color[i], color[j]] = [color[j], color[i]];
}
// console.log(color);

function rotateArr(arr, n) {
  n = n % arr.length;
  if (n === 0) return arr;
  let rotate = [...arr.slice(-n), ...arr.slice(0, arr.length - n)];

  return rotate;
}

console.log(rotateArr(color, 2));

// Compare two arrays for equality

let a = ["red", "green", "pink"];
let b = ["green", "blue"];

function isBothArrEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((val, index) => val === arr2[index]);
}
console.log(isBothArrEqual(a, b));


let vowels = "aeiouAEIOU";
let count = 0;
for (const word of a) {
  console.log(word);

  for (const char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }
}
console.log("count Vpwels", count);


first = "";
second = ""

for (const char of a) {
    if (char > first) {
        second = first;
        first = char;
    } else if (char > second && char < first) {
        second = char
    }
}
console.log(second);
