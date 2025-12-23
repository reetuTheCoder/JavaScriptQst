let arr = [1,2,4,5,6];

// let largest = Math.max(...arr);

// console.log(largest);

let largest = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]
    }
    
}
console.log(largest);