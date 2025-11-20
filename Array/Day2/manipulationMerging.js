let color = ["red", "green", "blue"];
let color1 = ["purple", "pink", "golden"];

// Merge two arrays without using spread
let mergeArr = [];
for (let i = 0; i < color.length; i++) {
  mergeArr.push(color[i]);
}
for (let i = 0; i < color1.length; i++) {
  mergeArr.push(color1[i]);
}
console.log(mergeArr);

let mergeArr1 = color.concat(color1);
console.log(mergeArr1);

let mergeArr3 = [];
mergeArr3.push.apply(mergeArr3, color);
mergeArr3.push.apply(mergeArr3, color1);
console.log("mergeArr3 ", mergeArr3);

// Merge two arrays using spread.
let mergeArr2 = [...color, ...color1];
console.log(mergeArr2);

// Zip two arrays (pair element index-wise).
let zipArr = color.map((ele, index) => [ele, color1[index]]);
console.log(zipArr); // it will give error when length is not same

let zipArr1 = [];

let leng = Math.max(color.length, color1.length);
// console.log(leng);

for (let i = 0; i < leng; i++) {
  zipArr1.push([color[i], color1[i]]);
}
console.log("zipArr1", zipArr1);

let a = [1, 2, 3];
let b = ["a", "b", "c"];
let c = ["X", "Y", "Z"];


// Interleave 3 arrays into one.
function interleave(x, y, z) {
  let output = [];

  let leng = Math.max(a.length, b.length, c.length);

  for (let i = 0; i < leng; i++) {
    output.push(x[i], y[i], z[i]);
  }

  return output;
}

console.log("jfj ", interleave(a, b, c));

//make upper function scalable
function interleave1(...arrs) {
  let output = [];

  let leng = Math.max(...arrs.map((ele) => ele.length));

  for (let i = 0; i < leng; i++) {
    for (const arr of arrs) {
      if (arr[i] !== undefined) {
        output.push(arr[i]);
      }
    }
  }

  return output;
}

console.log("jfj 1111", interleave1(a, b, c));




//Chunk an array into groups (e.g., group of 2).
let output = [];
let ChunkSize = 2;

for (let i = 0; i < color.length; i += ChunkSize) {
  console.log(i, "chunkSize", ChunkSize);

  output.push(color.slice(i, i + ChunkSize));
}
console.log(output);

let arr = ["red", "green", "blue", "yellow"];
let size = 2;
let result = [];
let i = 0;

while (i < arr.length) {
  console.log("i val", i);

  result.push(arr.slice(i, i + size));
  i += size;
}

console.log(result);

// here we are rotaing our array by give no of time
function rotateArr(arr, time) {
  time = time % arr.length;

  if (time === 0) return arr;
  let rot = [...arr.slice(-time), ...arr.slice(0, arr.length - time)];

  return rot;
}

console.log("rotate  arr 2 times:", rotateArr(arr, 1));

// Rotate array until a specific element comes to front. let assume specific ele is "blue"


// here we rotating form left
function rotateSpecificEle(arr, specificEle) {
  let index = arr.indexOf(specificEle);
  if (index === -1) return arr;
  if (index === 0) return arr;

  return [...arr.slice(index), ...arr.slice(0, index)];
}

console.log(rotateSpecificEle(arr, "green"));


// here we rotating form right

function rotateSpecificEleRight(arr, specificEle) {
  let index = arr.indexOf(specificEle);
  if (index === -1) return arr;
  if (index === 0) return arr;
 

  let rightSideRot = arr.length - index
  return [...arr.slice(-rightSideRot), ...arr.slice(0, arr.length -rightSideRot)];
}

console.log(rotateSpecificEleRight(arr, "blue"));



// Slice array into first half and second half.

let mid = Math.floor(arr.length /2 )

let firstHalf = arr.slice(0,mid)
let secondHalf = arr.slice(mid)


console.log(firstHalf);
console.log(secondHalf);