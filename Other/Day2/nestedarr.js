const nestedArray = [
  "red", // string
  123, // number
  true, // boolean
  null, // null
  undefined, // undefined

  ["green", "light-green", [1, 2, 3]], // nested arrays

  {
    name: "Magic Chat",
    count: 42,
    isActive: true,
    tags: ["js", "react"],
    nestedObj: {
      a: 1,
      b: { x: 10, y: [9, 8, 7] },
    },
  },

  [
    { id: 1, colors: ["pink", "yellow"] },
    { id: 2, colors: ["blue", "black"] },
  ],

  {
    mixed: [
      10,
      false,
      { level: 3, values: [11, 12, 13] },
      ["a", "b", ["deep", ["deeper", ["deepest"]]]],
    ],
  },
];

let newCopy = structuredClone(nestedArray);
// console.log(newCopy);

const arr1 = [1, [2, 3], [4, [5, 6]]];
// Access number 3.
// Access number 6.
// Replace 5 with 50.
// Add number 7 inside the deepest array.
// Count total numbers in the nested array.

// console.log(arr1[1][1]);
// console.log(arr1[2][1][1]);

let replaceNum = (arr1[2][1][0] = 50);
// console.log(replaceNum);
// console.log(arr1);
let deepArr = arr1[2][1].push(7);
// console.log(arr1);

function countTotalEle(arr) {
  let count = 0;
  let stack = [...arr];
  while (stack.length > 0) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item); 
    } else {
      count++; 
    }
  }

  return count;
}
// console.log(countTotalEle(arr1));




const arr2 = [
  "red",
  ["green", ["light-green", "dark-green"]],
  "blue",
  [["pink"], ["yellow", ["gold"]]],
];
// Get "light-green".
// Change "gold" to "24k-gold".
// Add "rose" inside the ["pink"] array.
// Flatten the array by 1 level.
// Fully flatten the entire array.


// console.log(arr2[1][1][0]);
let changeGold = arr2[3][1][1][0] = "24k-gold"
// console.log(arr2);
let addRose = arr2[3][0].push("rose")
// console.log(arr2);

// console.log(arr2.flat(1));
// console.log(arr2.flat(Infinity));




const arr3 = [
  { id: 1, colors: ["red", "green"] },
  [
    { id: 2, colors: ["blue", ["navy", "sky"]] },
    { id: 3, colors: ["pink", "purple"] }
  ],
  { id: 4, info: { shades: ["light", "medium", ["dark", "darker"]] } }
];

// Get "navy".
// Change "pink" to "hot-pink".
// Add "deepest" inside the ["dark", "darker"] array.
// Return all id values in one simple array → [1, 2, 3, 4].
// Count how many colors total exist across the structure.

console.log(arr3[1][0].colors[1][0]);
let changePink =arr3[1][1].colors[0] = "hot-pink"
console.log(arr3[1][1].colors);
let deepest = arr3[2].info.shades[2].push("deepest")
console.log(arr3[2].info.shades[2]);