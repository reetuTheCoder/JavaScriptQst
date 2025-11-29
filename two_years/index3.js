const output = ["a", "a", "a", "b", "b", "c"];

let arr = ["a", "c", "b", "a", "a", "b"];

let occur = {};
let newArr = [];

for (const ele of arr) {
  occur[ele] = (occur[ele] || 0) + 1;

  // once we have the occurance obj let's flip it's keys to the values
}

let maxOccrCount = Math.max(...Object.values(occur));
console.log("occurdfs", occur);
console.log("maxOccrCount", maxOccrCount);

console.log("maxOccrCount", maxOccrCount);
const empty_obj = {};

for (let key in occur) {
  const val = occur[key];
  console.log(key, "key-val", val);
  if (!empty_obj[val]) {
    empty_obj[val] = [];
  }

  empty_obj[val].push(key);
}

console.log("empty_obj", empty_obj);

let output_arr = [];
for (let i = maxOccrCount; i >= 1; i--) {
  const chars = empty_obj[i];
  console.log("val", chars);
  if (chars) {
    for (const char of chars) {
      for (let j = 0; j < i; j++) {
        output_arr.push(char);
      }
    }
  }
}

console.log("output_arr", output_arr);












