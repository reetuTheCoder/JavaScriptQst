let arr = ["x", "x", "z", "z", "y", "x"];

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log("original",arr);

console.log("reversed",reversed);
