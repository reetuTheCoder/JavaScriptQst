let str = "With Chrome profiles you can separate all your Chrome stuff";

// function largetWord(str) {
//     let newStr = str.toLowerCase().split(" ")
//     console.log("newStr", newStr);

//    return newStr.reduce((acc, val)=> val.length >= acc.length ? val : acc)

// }

// console.log(largetWord(str));

function largetWord(str) {
  let newStr = str.toLowerCase().split(" ");
  let maxWord = [];
  console.log("newStr", newStr);

  for (let i = 0; i < newStr.length; i++) {
    console.log([i], "i---", newStr[i]);

    if (newStr[i].length >= maxWord.length) {
      maxWord = newStr[i];
    }
  }
  return maxWord;
}

// console.log(largetWord(str));

function largestWords(str) {
  let words = str.toLowerCase().split(" ");
  let maxLength = 0;
  let longest = [];

  for (let i = 0; i < words.length; i++) {
    const len = words[i].length;

    if (len > maxLength) {
      maxLength = len;
      longest = [words[i]]; // reset and start new list
    } else if (len === maxLength) {
      longest.push(words[i]); // add same-length word
    }
  }

  return longest;
}

console.log(largestWords(str)); 
// Example output: [ 'coding', 'moment' ]

