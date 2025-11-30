let str = "reetu";

let reArrange = str
  .split("")
  .sort(() => Math.random() - 0.5)
  .join("");

console.log(reArrange);



let newAStr = str.split("");
let i = Math.floor(Math.random() * newAStr.length);
let j = Math.floor(Math.random() * newAStr.length);

[newAStr[i], newAStr[j]] = [newAStr[j], newAStr[i]];

console.log(newAStr.join(""));




function shuffleString(str) {
  let arr = str.split("");

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }

  return arr.join("");
}

console.log(shuffleString("reetu"));
