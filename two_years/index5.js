let str = "aaabbc";
// let occer = {};
// let result = ""
// for (let key of str) {
//   occer[key] = (occer[key] || 0) + 1;
// }

// console.log("occeroccer", occer);

// let keyVal = Object.entries(occer);

// console.log("keyVal", keyVal);

// let maxLenght = Math.max(...Object.values(occer))


// console.log("maxLenght", maxLenght);

// for (let i = 0; i < maxLenght; i++) {
  

//     for (const [key, count] of keyVal) {
//       // console.log(key,"key and count", count);

//       if (count > i) {
//         result += key
//       }
      
//     }
  
// }
// console.log("resultresult", result);


function rearrangeString(str) {

  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const result = [];
  let prevChar = null;

  for (let i = 0; i < str.length; i++) {
    let nextChar = null;
    let maxCount = 0;

    
    for (const char in freq) {
      // console.log(char,"freq[char]", freq[char]);
      if (freq[char] > maxCount && char !== prevChar) {
        
        maxCount = freq[char];
        nextChar = char;
      }
    }

    if (!nextChar) {
      return "";
    }

    console.log(maxCount,"nextChar ", nextChar, prevChar );
    
    result.push(nextChar);
    freq[nextChar]--;
    prevChar = nextChar;
  }

  return result.join('');
}

console.log(rearrangeString("aaabbc")); 
// console.log(rearrangeString("aaab"));   
// console.log(rearrangeString("reetuu")); 
