let num = [1, 2, 10, 11, 12, 13];

// steps
// extract - target and add in the new array, reste add in the seperate array
// loop and check if targets match store target value in the array reste in the next array
// create a final arr
// loop in the rest array and push into the final array 
// and check into the rest array where you want to add your target 
// when you get that point loop on the target and push it before you point

let targets = [12, 13];
let targetArr = [];
let result = [];

let isTargetMatch = false;
for (let i = 0; i < num.length; i++) {
  //   console.log("num[i]", num[i]);
  if (targets.includes(num[i])) {
    isTargetMatch = true;
  }
  if (isTargetMatch) {
    targetArr.push(num[i]);
    console.log("11111");
  } else {
    console.log("333333");
    result.push(num[i]);
  }
}

let finalResult = [];
for (let i = 0; i < result.length; i++) {
  // console.log("result", result);
  console.log("22222");
  finalResult.push(result[i]);

  if (result[i] === 10) {
    for (let k = 0; k < targetArr.length; k++) {
      finalResult.push(targetArr[k]);
    }
  }
}
console.log("result", result, "targetArr", targetArr, "fina", finalResult);
