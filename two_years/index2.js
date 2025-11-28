const output = ["a", "a", "a", "b", "b", "c"];

let arr = ["a", "c", "b", "a", "a", "b",];

let occur = {};
let newArr = [];

for (const ele of arr) {
  occur[ele] = (occur[ele] || 0) + 1;

  console.log(occur[ele]);

  // once we have the occurance obj let's flip it's keys to the values
}

console.log("occurdfs", occur);
let maxOccrCount = Math.max(...Object.values(occur));


const empty_obj = {};
for (let key in occur) {
  const val = occur[key];
  console.log(key, "key-val", val);
  empty_obj[val] = key;
}

console.log("empty_obj", empty_obj);

let output_arr = [];

// here our trackChanged 
for (let i = maxOccrCount; i>=1; i--) {
   console.log(i,"maxOccrCount",maxOccrCount);
   console.log("empty_obj[i]  ",empty_obj[i])
   if (empty_obj[i]) {
     for (const char of empty_obj[i]) {
        for (let j = 0; j < i; j++) {
           output_arr.push(char)
            
        }
     }
   }
    
}


// for (let key in empty_obj) {
//   const val = empty_obj[key];
//     console.log("val", val);
// //   console.log(key, "key------------val", val);

//   // run the for loop till the value and append to output array
//   for (let index = 0; index < key; index++) {
//     // console.log("key running..................", key);
//     output_arr.push(val);
//   }
// }

console.log("output_arr", output_arr);
