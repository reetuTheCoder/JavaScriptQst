let color = ["red", "green", "blue"];
let color1 = ["purple", "pink", "golden"];


// Destructure array into first, second, third.
const [first, second, third] = color;

console.log(first);
console.log(second);
console.log(third);



// Skip elements while destructuring.

const [first1, , third1] = color1
console.log(first1, third1);

const [, , ...rest] = color1

console.log(rest);





// Swap two array elements using destructuring.

// Swap in the same array ele

console.log("original arr befor swap", color);

[color[1], color[2]] = [color[2] , color[1]]
console.log("after swap", color);



// Swap 2 array

console.log("original arr befor swap", color1);
[color[1], color1[2]] = [color1[2] , color[1]]
console.log("after swap", color);
console.log("after swap", color1);