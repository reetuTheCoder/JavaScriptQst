let str = "hello";
let str1 = "THEN";

function evenIdexChar(str) {
  let evenWordIndex = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    console.log(char);

    if ([i] % 2 === 0) {
      evenWordIndex.push(char);
    }
  }

  return evenWordIndex;
}

// console.log(evenIdexChar(str));

function mixStringOneAndOne(str, str1) {
  let newStr = str.split("");
  let str2Indx = 0;

  for (let i = 0; i < newStr.length; i++) {
    // console.log(newStr[i], "i value", i);

    if (i % 2 !== 0 && str2Indx < str1.length) {
      newStr[i] = str1[str2Indx];
      str2Indx++;

      console.log(str2Indx);
    }
  }

  return newStr.join("");
}

// console.log(mixStringOneAndOne(str, str1));

function mixStringOneByOne(str, str1) {
  let output = "";
  let str1Indx = 0;

  for (let i = 0; i < str.length; i++) {
    output += str[i];
    console.log("output1111", output);
    if (str1Indx < str1.length) {
      output += str1[str1Indx];
      console.log("output", output);

      str1Indx++;
    }
  }

  return output;
}

// console.log(mixStringOneByOne(str, str1));

function mixStringTwoByOne(str, str1) {
  let output = "";
  let str1Indx = 0;

  for (let i = 0; i < str.length; i++) {
    output += str[i];
    console.log("output1111", output);
    if ((i + 1) % 2 === 0 && str1Indx < str1.length) {
      output += str1[str1Indx];
      console.log("output", output);

      str1Indx++;
    }
  }

  return output;
}

console.log(mixStringTwoByOne(str, str1));

function mixStringThreeByOne(str, str1) {
  let output = "";
  let str1Indx = 0;

  for (let i = 0; i < str.length; i++) {
    output += str[i];
    console.log("output1111", output);
    if ((i + 1) % 3 === 0 && str1Indx < str1.length) {
      output += str1[str1Indx];
      console.log("output", output);

      str1Indx++;
    }
  }

  return output;
}

console.log(mixStringThreeByOne(str, str1));
