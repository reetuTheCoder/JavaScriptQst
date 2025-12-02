// Q10 — Convert Deep Nested Array → Object
let arr = [
  ["a", 10],
  ["b", 20],
  ["c", 30],
  ["d", [1, 2, 3]],
];

const arrObj = Object.fromEntries(arr);

console.log(arrObj);

// Q11 — Convert Array of Objects → Group by First Letter
let users = [
  { name: "Amit", age: 20 },
  { name: "Ankit", age: 22 },
  { name: "Bina", age: 30 },
  { name: "Bhavya", age: 25 },
];

let emptyObj = {};
users.forEach((user) => {
  // console.log(user.name.charAt(0));
  let keys = user.name.charAt(0);
  if (!emptyObj[keys]) {
    emptyObj[keys] = [];
  }
  emptyObj[keys].push(user.name);
});

console.log(emptyObj);

// Q12 — Convert Object With Arrays → Flatten Array

let input = {
  fruits: ["apple", "banana"],
  veg: ["carrot"],
  dry: ["almond", "cashew"],
};

let emptyArry = [];
for (const key in input) {
  let val = input[key];

  emptyArry.push(val);
}

console.log(emptyArry.flat(Infinity));

// Q13 — Convert Array of Objects → Key = name, Value = whole object

let arr1 = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];

let objConvt = {};
arr1.forEach((user) => {
  if (!objConvt[user.name]) {
    objConvt[user.name] = user;
  }
});

console.log(objConvt);

// Q14 — Convert Object → Reverse Keys & Values

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let reveseKeys = {};
for (const key in obj) {
  let keys = obj[key];
  reveseKeys[keys] = key;
}

console.log(reveseKeys);

// Q15 — Convert array → object counting each character’s positions

let arr2 = ["a", "b", "a", "c", "b", "a"];

let positionsObj = {};
arr2.forEach((ele, index) => {
  // console.log(ele,"fdgdfgdf",index);
  if (!positionsObj[ele]) {
    positionsObj[ele] = [];
  }
  positionsObj[ele].push(index);
});

console.log(positionsObj);

// Q16 — Convert object with nested objects → flatten with dot notation

let data = {
  user: {
    name: "A",
    address: {
      city: "Delhi",
      pin: 110001
    }
  }
};


// Q17 — Convert array of objects → group by age range

let people = [
  { name: "A", age: 18 },
  { name: "B", age: 28 },
  { name: "C", age: 45 }
];

let rangeObj = {}

people.forEach(user => {
  let ageRange = ""
  if (user.age <= 20) {
    ageRange = "young"
  } else  if (user.age <= 40) {
    ageRange = "adult"
  } else {
    ageRange = "senior"
  }

  if (!rangeObj[ageRange]) {
    rangeObj[ageRange] = []
  }
  rangeObj[ageRange].push(user.name)
});


console.log(rangeObj);

















// Q18 — Convert array → object but values should be unique sorted

let arr3 = ["b", "a", "c", "a", "b", "d"];
let uniqueArr = {u:arr3.filter((ele, index)=> arr3.indexOf(ele) === index).sort()}

console.log(uniqueArr);


