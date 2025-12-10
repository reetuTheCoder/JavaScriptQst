let orgiginalStr = "hello";
let str = "hello";

let post = 0;
let targetPairCount = 0;
let target = "l";

let newArry = new Array(str.length).fill("");
console.log("newArry", newArry);

let t_leng = target.length;
for (let i = 0; i < str.length; i++) {
  // console.log("str.slice(i, i + t_leng)", str.slice(i, i + t_leng));

  let current = str.slice(i, i + t_leng);

  // console.log("current", current);

  if (current === target) {
    targetPairCount++;
    i += t_leng - 1;
  } else {
    newArry[post] = str[i];
    post++;
  }
}

for (let j = 0; j < targetPairCount; j++) {
  for (let k = 0; k < t_leng; k++) {
    newArry[post] = target[k];
    post++;
  }
}

let finalStr = newArry.join("");
console.log(finalStr);




let str1 = "hello";
let target1 = "ll";

let tLen = target1.length;

let startPart = "";   
let restPart = "";    

for (let i = 0; i < str1.length; i++) {
  let current = str1.slice(i, i + tLen);

  if (current === target1) {
    startPart += target1;     
    i += tLen - 1;            
  } else {
    restPart += str1[i];       
  }
}

let finalStr1 = startPart + restPart;
console.log(finalStr1);  // "llheo"




let str2 = "reathello";

// Step 1 — extract ll
let withoutLL = "";
let llCount = 0;

for (let i = 0; i < str2.length; i++) {
  if (str2[i] === "l" && str2[i + 1] === "l") {
    llCount++;
    i++; // skip second 'l'
  } else {
    withoutLL += str2[i];
  }
}

let insertPos = -1;

// Step 2 — find "h" followed by "e"
for (let i = 0; i < withoutLL.length - 1; i++) {
  if (withoutLL[i] === "h" && withoutLL[i + 1] === "e") {
    insertPos = i + 1; 
    break;
  }
}

// Step 3 — rebuild string
let result = "";

for (let i = 0; i < withoutLL.length; i++) {
  if (i === insertPos) {
    result += "ll".repeat(llCount);
  }
  result += withoutLL[i];
}

console.log(result); // 👉 "reathlleo"
