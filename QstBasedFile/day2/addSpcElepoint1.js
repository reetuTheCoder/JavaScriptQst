// i want [12,13] after my second 10 element like [1,10, 2, 10, 12, 13, 11,10]

let num = [1, 10, 2, 10, 11, 12, 13, 10];

let targets = [12, 13];
let targetArr = [];
let result = [];

let occer10 = 0;
let second10Pos = 2
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
    occer10++
   if (occer10 === second10Pos) {
     for (let k = 0; k < targetArr.length; k++) {
      finalResult.push(targetArr[k]);
    }
   }
  }
}
console.log("result", result, "targetArr", targetArr);
console.log(occer10,"fina------------", finalResult);
