let str = "hhello";

// function findDupilcatVal(str) {
//   let freq = {};

//   for (const word of str) {
//     freq[word] = (freq[word] || 0) + 1;
//   }

//   let duplicateVal = ""

//   for (const [word] in freq) {
//     if (freq[word] > 1) {
//         duplicateVal += word
//     }
//   }

//   return duplicateVal
// }

// console.log(findDupilcatVal(str));

function findDupilcatValWithIndex(str) {
  let freq = {};
  let duplicateVal = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // console.log(char +  "-" + i);

    if (!freq[char]) {
      freq[char] = [i];
    } else {
      freq[char].push(i);
      console.log("duplicate index", freq[char]);

      console.log("duplicateVal[char]", duplicateVal[char]);
      console.log("freq[char]", freq[char]);
      duplicateVal[char] = freq[char];
    }
  }
  return duplicateVal;
}

console.log(findDupilcatValWithIndex(str));
