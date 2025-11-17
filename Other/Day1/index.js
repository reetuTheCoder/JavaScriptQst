let color = ["red", "green", "pink", "red", "green"];
////1. Reverse the array
// console.log(color.reverse());

////2. Remove "green" from the array (without knowing its index)
// first way
let newColor = color.filter((ele) => ele !== "green");
// console.log(newColor);

// second way and it will modify original array
// for (let i = color.length - 1; i >= 0; i--) {
//   if (color[i] === "green") {
//     // console.log(color[i]);

//       color.splice(i, 1);
//     // console.log(color.splice(i, 1));

//   }
// }
// console.log(color);

////3. Sort the array alphabetically
// console.log(color.sort((a, b) => a.localeCompare(b)));

let color1 = ["blue", "yellow"];

// console.log(color.concat(color1));

////4. Remove the last two colors
// console.log("original arr", color);

// console.log(color.splice(-2,2));
// console.log("after remove arr", color);

////5. Remove duplicate colors  ["red", "green", "pink", "red", "green"]

// console.log(color.filter((ele, index) => color.indexOf(ele) === index));

////6. Convert all colors to sentence-case (first letter uppercase)

// console.log(color.map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1)));



///7. Filter colors that have more than 4 letters

// console.log(color.filter((el)=> el.length > 4));


///8 Add a color at index 1 How do you insert "purple" at index 1 without removing anything?

// console.log("origmal arry", color);
// color.splice(1,0, "purple")
// console.log("after", color);




//// 9 Get a sub-array

// let subArray = color.slice(0, 2)
// console.log(subArray);
// console.log("origmal arry", color);


console.log(color.find((ele)=> ele.startsWith("p")));
