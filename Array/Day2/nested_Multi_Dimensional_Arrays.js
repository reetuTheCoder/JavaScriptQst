let arr = [ [1,2],[3,[4,5]] ]

// Access nested values from array [ [1,2],[3,[4,5]] ]

console.log(arr[1][1][1]);
console.log(arr[1][0]);
console.log(arr[0][0]);



// Deep flatten any nested array (recursion).

function flatArry(arr) {
   let output = []

   for (const ele of arr) {
      if (Array.isArray(ele)) {
        output.push(...flatArry(ele))
      }else{
        output.push(ele)
      }
   }
   return output
    
}
console.log(flatArry(arr));



function sumAllArry(arr) {
   let output = 0

   for (const ele of arr) {
      if (Array.isArray(ele)) {
        console.log("going from here ");
        
        output += sumAllArry(ele)
      }else{
        console.log("going from here1111");
        
       output += ele
      }
   }
   return output
    
}
console.log(sumAllArry(arr));