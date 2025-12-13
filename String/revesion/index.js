let data = "mamm";
// let data = [1, 2, 3, 2, 1,];

let isPalin = true;

let left = 0;
let right = data.length - 1;

// while (left < right) {
//   if (data[left] !== data[right]) {
//     isPalin = false;
//     break;
//   }
//   left++;
//   right--;
// }

// console.log(isPalin, "fgf", data);



for (let i = 0; i < data.length /2; i++) {
    if (data[i] !== data[data.length -1 -i]) {
        isPalin = false;
        break;
    }
    
}
console.log("ispa", isPalin);

