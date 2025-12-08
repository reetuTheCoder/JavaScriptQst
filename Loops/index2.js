// Q3 — Find All Triplet Pairs (i, j, k)

let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  // console.log("iii", i);

  for (let j = i + 1; j < arr.length; j++) {
    // console.log("jjj", j);
    for (let k = j + 1; k < arr.length; k++) {
      // console.log("kkk", k);
      console.log("dfdsfjs", arr[i], arr[j], arr[k]);
    }
  }
}

// Q5 — Count Total Increasing Pairs

let arr1 = [1, 4, 2, 5];
// 1,4
// 1,2
// 1,5
// 4,5
// 2, 5

let pair = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] < arr1[j]) {
      pair++;
    }
  }
}
console.log("pair", pair);

// Q6 — Find First Repeating Element (Using Only Loops)
let arr2 = [5, 1, 2, 3, 2, 4];
let firstRepeated = null;
for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] === arr2[j]) {
      firstRepeated = arr2[i];
      break;
    }
  }

  if (firstRepeated !== null) {
    break;
  }
}

console.log("First Repeating Element:", firstRepeated);

// Q7 — Rotate Array by 1 (Clockwise)
let arr3 = [1, 2, 3, 4];

let lastEle = arr3[arr3.length - 1];

// console.log(lastEle);

for (let i = arr3.length - 1; i > 0; i--) {
  // console.log("a",  arr3[i] =  arr3[i -1]);

  arr3[i] = arr3[i - 1];
}
arr3[0] = lastEle;
console.log(" arr3", arr3);






// Q8 — Find All Subarrays With Even Sum
let arr4 = [1, 2, 3, 4];

let subArr = []
for (let i = 0; i < arr4.length; i++) {
  let sum = 0;

  for (let j = i; j < arr4.length; j++) {
    sum += arr4[j] ;

    // console.log("element",element);

    if (sum % 2 === 0) {
        // console.log("arr4.slice(i, j + 1)", arr4.slice(i, j + 1));
        
      subArr.push(arr4.slice(i, j + 1))
        
    }
    
  }
}

console.log(subArr);



// Q11 — Find All Pairs Whose Product Is 10

let arr5 = [1, 2, 5, 10];
let target = 10
for (let i = 0; i < arr5.length; i++) {
   for (let j = i + 1; j < arr5.length; j++) {
     
    let pair = arr5[i] * arr5[j]

    // console.log("pairssssssss", pair);

    if (pair === target) {
        console.log("arr[i]arr[i]",arr5[i], arr5[j] );
        
    }
    
    
   }
    
}


let arr6 = [1,2,3,4]

let sorted  =  false;

for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > arr6[i + 1]) {
        sorted = true
    }
}