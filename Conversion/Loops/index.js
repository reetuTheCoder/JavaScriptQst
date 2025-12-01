// Q1. Print each element of array

let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Q2. Print element + its index
let arr1 = ["a", "b", "c"];

for (let i = 0; i < arr1.length; i++) {
  console.log(i, "print ele and its index", arr1[i]);
}

// Q3. Create new array by doubling values

let arr3 = [1, 2, 3];

for (let i = 0; i < arr3.length; i++) {
  const element = arr3[i] * 2;
  console.log(element);
}

// Q4. Count how many even numbers

let arr4 = [1, 4, 6, 7, 9];

let evenValueCount = 0;
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 === 0) {
    evenValueCount++;
  }
}
console.log("evenValue", evenValueCount);

// Q5. Print all pairs
let arr5 = [1, 2, 3];

for (let i = 0; i < arr5.length; i++) {
  const iEle = arr5[i];

  for (let k = 0; k < arr5.length; k++) {
    const kEle = arr5[k];

    console.log(iEle, "hhhhhh", kEle);
  }
}

// Q6. Compare each element with others

let arr6 = [3, 1, 2];
for (let i = 0; i < arr6.length; i++) {
  const iEle = arr6[i];

  for (let k = 0; k < arr6.length; k++) {
    const kEle = arr6[k];

    console.log(iEle, "fdffg", kEle);
  }
}

// Q7. Print each key of object
let obj = { a: 1, b: 2 };

for (const key in obj) {
  console.log(key);
}

// Q8. Print key and value
let obj1 = { x: 10, y: 20 };
for (const key in obj1) {
  console.log(key, obj1[key]);
}

// Q9. Print each object's name

let users = [{ name: "A" }, { name: "B" }, { name: "C" }];

for (const ele of users) {
  console.log(ele.name);
}

// Q10. Print "name: age"

let users1 = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];

for (const ele of users1) {
  let userName = ele.name;
  let userAge = ele.age;
  console.log(userName, userAge);
}

// Q11. Sum all elements of array
let arr11 = [5, 10, 15];

let sum = 0;

for (let i = 0; i < arr11.length; i++) {
  sum += arr11[i];
}
console.log("sum---------", sum);

// Q12. Find the largest number in array

let arr12 = [3, 8, 2, 10, 4];

let largestNum = 0;
for (let i = 0; i < arr12.length; i++) {
  const ele = arr12[i];

  if (ele > largestNum) {
    largestNum = ele;
  }
}
console.log("largestNum------", largestNum);

// Q13. Convert array → object where keys start from 1

let arr13 = ["a", "b", "c"];

let convObj = {};

for (let i = 0; i < arr13.length; i++) {
  convObj[i + 1] = arr13[i];
}
console.log(convObj);

// Q14. Print index of each object's name

let users2 = [{ name: "Ram" }, { name: "Shyam" }, { name: "Sita" }];

for (let i = 0; i < users2.length; i++) {
  console.log("print index---------", i, users2[i].name);
}

// Q15. Count how many items belong to category "fruit"

let data = [
  { item: "apple", category: "fruit" },
  { item: "banana", category: "fruit" },
  { item: "carrot", category: "veg" },
];

let fruitCount = 0;
for (let i = 0; i < data.length; i++) {
  const category = data[i].category;

  if (category === "fruit") {
    fruitCount++;
  }
}

console.log("fruitCount-----", fruitCount);

// Q16. Multiply each number of arr1 with each number of arr2

let arr16 = [1, 2];
let arr17 = [10, 20];

for (let i = 0; i < arr16.length; i++) {
  for (let h = 0; h < arr17.length; h++) {
    console.log("muliply------------", arr16[i] * arr17[h]);
  }
}
