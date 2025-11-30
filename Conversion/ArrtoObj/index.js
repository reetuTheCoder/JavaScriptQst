//Q1. Convert this array into an object with the index as the key
let arr = ["a", "b", "c"];

let obj = {};

arr.forEach((ele, index) => {
  obj[index] = ele;
});

// console.log(obj);

//Q2. Convert array into an object showing frequency of each element
let arr1 = ["x", "y", "x", "z", "x", "y"];
let ferq = {};

for (const ele of arr1) {
  ferq[ele] = (ferq[ele] || 0) + 1;
}

// console.log(ferq);

// Q3. Convert an array of numbers into an object where the key is the number and the value is whether it is even or odd.

let arr2 = [1, 2, 3, 4, 5];

let convArr = {};

arr2.forEach((item) => {
  // console.log(item, index);
  if (item % 2 === 0) {
    convArr[item] = "even";
  } else {
    convArr[item] = "odd";
  }
});

// console.log(convArr);

// Q4. Convert this array into an object where keys are names and values are their lengths.

let arr4 = ["apple", "kiwi", "banana"];

let nameLenght = {};

for (const ele of arr4) {
  nameLenght[ele] = ele.length;
}
// console.log(nameLenght);

// Q5. Convert an array of objects into a single object using a property as the key.

let arr5 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

let arrObj = {};

for (const item of arr5) {
  arrObj[item.id] = item;
}
// console.log(arrObj);

// Q6. Convert an array of strings into an object that groups by first letter.

let arr6 = ["cat", "cow", "dog", "doll", "apple"];

let groupsObj = {};

arr6.forEach((ele) => {
  let firstCharKey = ele.charAt(0);

  if (!groupsObj[firstCharKey]) {
    groupsObj[firstCharKey] = [];
  }
  groupsObj[firstCharKey].push(ele);
});

console.log(groupsObj);

// Q7. Convert array of mixed types into an object with counts by type

let arr7 = [1, "a", true, 2, "b", false, "c"];

let empObj = {};

for (const item of arr7) {
  let dataType = typeof item;
  //   console.log(dataType);

  if (!empObj[dataType]) {
    empObj[dataType] = 0;
  }

  empObj[dataType]++;
}
console.log(empObj);

// Q8. Convert this array into an object where:

let arr8 = [2, 3, 4, 5];

let squareEle = {};

arr8.forEach((ele) => {
  squareEle[ele] = ele * ele;
});

console.log(squareEle);

// Q9. Convert array of names into an object that groups by length.

let arr9 = ["hi", "cat", "dog", "sun", "ok", "go"];

let groupsByLen = {};

arr9.forEach((ele) => {
  let charLength = ele.length;

  if (!groupsByLen[charLength]) {
    groupsByLen[charLength] = [];
  }
  groupsByLen[charLength].push(ele);
});

console.log("groupsByLen----", groupsByLen);

// Q10. Convert an array of students into an object grouped by marks range.

let students = [
  { name: "A", marks: 85 },
  { name: "B", marks: 92 },
  { name: "C", marks: 70 },
  { name: "D", marks: 55 },
  { name: "E", marks: 40 },
];

let marks = {};

students.forEach((student) => {
  console.log(student.marks);
  let stdMarks = student.marks;
  let category = "";

  if (stdMarks >= 90) {
    category = "90+";
  } else if (stdMarks >= 80) {
    category = "80+";
  } else if (stdMarks >= 70) {
    category = "70+";
  } else {
    category = "below70";
  }

  if (!marks[category]) {
    marks[category] = [];
  }
  marks[category].push(student.name);
});

console.log(marks);
