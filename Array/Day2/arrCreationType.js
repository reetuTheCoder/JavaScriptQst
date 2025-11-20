let arr = [1, 2, 3];

console.log("arr", arr);

let arr1 = new Array(1, 2, 3);
arr1.push(4)
console.log("arr1", arr1.length);


let arr2 = new Array(3);
arr2.push(4)
console.log(arr2,"arr2", arr2.length);


let arr3 = Array.from(new Set([1,2,2,3]));

console.log("arr3", arr3);



let arr4 = new Array(10).fill(0);
console.log("arr4", arr4);


for (let i = 0; i < arr4.length; i++) {
  arr4[i] = i + 1;
}

console.log("arr4", arr4);