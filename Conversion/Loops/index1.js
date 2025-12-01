// Q1. Print each element twice

let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < 2; k++) {
    console.log(arr[i]);
  }
}

// Q2. Print pairs where both loops run same array

let arr1 = ["a", "b"];

for (let i = 0; i < arr1.length; i++) {
  for (let k = 0; k < arr1.length; k++) {
    console.log(arr1[i], "fghfdjg", arr1[k]);
  }
}

// Q3. Print all pairs where inner loop starts from outer index

for (let i = 0; i < arr.length; i++) {
  for (let k = i; k < arr.length; k++) {
    console.log(arr[i], arr[k]);
  }
}

// Q4. Print sum of pair (i + j)
let arr2 = [2, 4];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    console.log("sum------", arr2[i] + arr2[j]);
  }
}

// Q5. Nested loop with object inside array

let users = [
  { name: "A", hobbies: ["x", "y"] },
  { name: "B", hobbies: ["p"] },
];

for (let i = 0; i < users.length; i++) {
  const element = users[i];
  const hb = element.hobbies;
  const userName = element.name;
  // console.log(element.name,"element--------", element.hobbies);
  for (let hobbie = 0; hobbie < hb.length; hobbie++) {
    const listHb = hb[hobbie];

    console.log(userName, listHb);
  }
}

// Q6. Print row & column using nested loops
let rows = 2;
let cols = 3;

for (let i = 0; i < rows; i++) {
  // console.log("rows", [i]);
  
  for (let j = 0; j < cols; j++) {
    // console.log("cols", [j]);

    console.log("rows",[i],"cols", [j]);
    
  }
}
