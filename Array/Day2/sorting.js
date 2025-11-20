let color = ["red", "green", "blue"];

// Sort strings alphabetically.
let afterSort = color.sort();
console.log(afterSort);

// Sort numbers ascending and descending.
let a = [1, 2, 3];

let ascendingSort = a.sort((a, b) => a - b);
console.log(ascendingSort)

let descendingSort = a.sort((a, b) => b - a);
console.log(descendingSort);

// Sort array of objects (you can create your own objects).
let users = [
  { name: "reetu", age: 20, city: "Noida" },
  { name: "mohan", age: 22, city: "Delhi" },
  { name: "sohan", age: 19, city: "Noida" },
];

let store = users.sort((a, b) => a.age - b.age);

console.log(store);



// Reverse array without using .reverse().
let reversed = []
for (let i = color.length - 1; i >= 0; i--) {
  reversed.push(color[i])
}
console.log("cchsd", color);





let reversedBYReduce = color.reduce((acc, cur) => [cur, ...acc], []);

console.log(reversedBYReduce);
