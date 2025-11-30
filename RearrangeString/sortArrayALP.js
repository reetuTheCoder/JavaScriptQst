let str = "reetu";

let arrStr = str.split("");

for (let i = 0; i < arrStr.length; i++) {
  let indexs = i;

  console.log("indexs i value", indexs);

  for (let j = i + 1; j < arrStr.length; j++) {
    if (arrStr[j] < arrStr[indexs]) {
      indexs = j;

      console.log("indexs j", indexs);
      [arrStr[i], arrStr[indexs]] = [arrStr[indexs], arrStr[i]];
    }
  }
}

console.log("arrStr", arrStr.join(""));
