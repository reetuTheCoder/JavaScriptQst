let arr = [1, 2, 4, 5, 7, 9];

let len = 9;
// let len = Math.max(...arr);

console.log(len);

let set = new Set(arr);

let missing = [];

for (let i = 1; i <= len; i++) {
  if (!set.has(i)) {
    missing.push(i);
  }
}

console.log(missing);

///Rearrange array alternately (positive & negative)

let arra = [1, 2, 3, -4, -1, 4];

let negative = [];
let positive = [];

for (let i = 0; i < arra.length; i++) {
  if (arra[i] < 0) {
    negative.push(arra[i]);
  } else {
    positive.push(arra[i]);
  }
}

let posInx = 0;
let negInx = 0;

let newArr = [];

while (posInx < positive.length || negInx < negative.length) {
  if (posInx < positive.length) {
    newArr.push(positive[posInx++]);
  }

  if (negInx < negative.length) {
    newArr.push(negative[negInx++]);
  }
}

console.log(newArr);

console.log(negative, positive);
