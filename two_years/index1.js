// Q1. Remove duplicates from an array (keep order same)

let arr = [1, 2, 3, 2, 1, 4];

let removeDuplicate = arr.filter((ele, index) => arr.indexOf(ele) === index);

console.log(removeDuplicate);

console.log(new Set(arr));

let uniq = [];
let freq = {};

// for (const num of arr) {
//   freq[num] = (freq[num] || 0) + 1;

//   if (freq[num] === 1) {
//     uniq.push(num);
//   }
// }

for (let i = 0; i < arr.length; i++) {
  if (!uniq.includes(arr[i])) {
    console.log("!uniq.includes(arr[i])", !uniq.includes(arr[i]));

    uniq.push(arr[i]);
  }
}

console.log("uniq", uniq);

// Q2. Reverse a string without using .reverse()

let str = "reetu";

let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}

console.log("reverseStr :", reverseStr);

let splitStr = str.split("");

let reverseVal = splitStr.reduceRight((acc, val) => {
  return (acc += val);
});
console.log("store", reverseVal);

// Q4. Count the occurrences of each character in a string

let occur = {};
for (const char of str) {
  occur[char] = (occur[char] || 0) + 1;
}

console.log("occur :", occur);

// Q5. Find the second largest number in an array

let arr1 = [5, 1, 9, 2, 9, 7, 8];

let first = -Infinity;
let second = -Infinity;

for (const num of arr1) {
  if (num > first) {
    second = first;
    first = num;
  } else if (second < num && num < first) {
    second = num
  }
}


console.log(" second ", second);




function myFun(num) {

    if (num % 3 === 0) {
    
       return "hello"
        
    }
    
}

myFun(6)