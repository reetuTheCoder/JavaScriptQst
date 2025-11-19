let color = ["red", "green", "pink"];

// console.log(color.join(","));

const arr = [
  ["name", "age"],
  ["reetu", 25],
  ["aman", 30],
];


// console.log(arr.map((ele)=> ele.join(",")).join("\n"));



const arr1 = [
  { name: "reetu", age: 25 },
  { name: "aman", age: 30 },
];

let arrKey = Object.keys(arr1[0]).join(",")

// console.log("arrKey :", arrKey);

let arrVal = arr1.map((ele)=> Object.values(ele).join(",")).join("\n")
// console.log("arrVal :", arrVal);

let csvFormat = arrKey + "\n" + arrVal
console.log("csvFormat: ",csvFormat);
