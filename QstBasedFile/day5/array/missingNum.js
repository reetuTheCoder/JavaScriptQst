let arr = [1, 2, 4, 5, 6];

let len = 6;

let makeObj = new Set(arr)
console.log(makeObj);

let missNum = []

for (let i = 1; i <= len; i++) {
   if (!makeObj.has(i)) {
    missNum.push(i)
   }
    
}

console.log(missNum);
