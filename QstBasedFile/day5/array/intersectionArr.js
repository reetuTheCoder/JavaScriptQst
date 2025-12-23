let a = [1, 2, 3, 4];
let b = [5, 6, 3, 4];

// let intersection = [];

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] === b[j]) {
//       intersection.push(b[j]);
//     }
//   }
// }
// console.log(intersection);



// let setInter = new Set(b);

// let inter = a.filter((ele) => setInter.has(ele));

// console.log(inter);





let inter = a.filter((ele) => b.includes(ele));

console.log(inter);