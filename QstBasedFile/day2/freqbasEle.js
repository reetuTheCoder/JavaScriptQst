let arr = ["x","x","z","z","y","x"];

let freq = {};

for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
        freq[arr[i]] ++;
    } else {
        freq[arr[i]] = 1
    }
    
}
// console.log("freq",freq);

let obj = {};

for (const key in freq) {
   let val = freq[key];

//    console.log(val);

if (!obj[val]) {
    obj[val] =[];
}
   obj[val].push(key)
}
console.log("obj", obj);

let output = []
for (let j = 1; j <= arr.length; j++) {
  // console.log("jjjjjjj",j);
  //  console.log("obj",obj[j]);
  
   if (obj[j]) {
     for (const key of obj[j]) {
      // console.log(obj[j],"keys",key);
      
      for (let k = 0; k < j; k++) {
        output.push(key)
        
      }  
     }
   }
    
}

console.log(output);
