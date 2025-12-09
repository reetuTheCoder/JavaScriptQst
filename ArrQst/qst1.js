// Find Second Largest Element

let arr = [10, 5, 20, 8];

let first = -Infinity;
let second = -Infinity;

let freq = {};
for (let i = 0; i < arr.length; i++) {
//   if (freq[arr[i]]) {
//     freq[arr[i]]++;
//   } else {
//     freq[arr[i]] = 1;
//   }

  if (arr[i] > first) {
    second = first;
    first = arr[i];
  } else if (arr[i] > second && arr[i] < first) {
    second = arr[i];
  }
}

console.log(freq);
console.log(second);

// 2. Remove Duplicates Without Using Set

let arr1 = [1, 2, 2, 3, 4, 3];

let duplicItem = [];
let freqEle = {};
for (let i = 0; i < arr1.length; i++) {
  if (freqEle[arr1[i]]) {
    freqEle[arr1[i]]++;
  } else {
    freqEle[arr1[i]] = 1;
  }
}
let unique = [];
for (const key in freqEle) {
  unique.push(Number(key));
}
console.log("removed duplicItem", unique);

// 3. Count Frequency of Each Element
let arr2 = ["a", "b", "a", "c", "b"];

let freqCount = {};

for (const key of arr2) {
  freqCount[key] = (freqCount[key] || 0) + 1;
}

console.log("freqCount", freqCount);

// 4. Reverse an Array Without reverse()
let arr3 = [1, 2, 3, 4];

let reversedArr = [];

for (let i = arr3.length - 1; i >= 0; i--) {
  reversedArr.push(arr3[i]);
}
console.log("reversedArr", reversedArr);

// 5. Find All Even Numbers

let arr4 = [1, 2, 3, 4, 5, 6];
let evenEle = [];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 === 0) {
    evenEle.push(arr4[i]);
  }
}

console.log("evenEle", evenEle);

// 6. Find Missing Number (1 to N)

let arr5 = [1, 2, 4, 5, 7];

let missingEle = [];

for (let i = 0; i < arr5.length - 1; i++) {
  const currentVal = arr5[i];

  let next = arr5[i + 1];

  console.log(currentVal, "currentValcurrentValcurrentVal", next);

  for (let j = currentVal + 1; j < next; j++) {
    missingEle.push(j);
  }
}
console.log("missingEle", missingEle);

let missingVal = arr5[0];
for (let i = 0; i < arr5.length; i++) {
  while (arr5[i] !== missingVal) {
    console.log("missingVal", missingVal);
    missingVal++;
  }

  missingVal++;
}

// 7. Find First Repeating Element

let arr6 = [5, 1, 2, 3, 2, 4, 5];

let freqeArr = {};
for (const key of arr6) {
  freqeArr[key] = (freqeArr[key] || 0) + 1;

  if (freqeArr[key] > 1) {
    console.log("freqeArr[key]", key);

    break;
  }
}

// 8. Find All Pairs With Given Sum

let arr7 = [1, 5, 7, -1, 5];
let target = 6;

for (let i = 0; i < arr7.length; i++) {
  for (let j = i + 1; j < arr7.length; j++) {
    let diff = arr7[i] + arr7[j];
    //   console.log("diff",diff);

    if (diff === target) {
      console.log("Pairs With Given Sum", arr7[i], arr7[j]);
    }
  }
}
