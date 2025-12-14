let arr = ["x","x","z","z","y","x"];

// let arr = ["x","y","z"];

// [x]
// [x,x]
// [x,x,z]
// [x,x,z,z]
// [x,x,z,z,y]
// [x,x,z,z,y,x]

// [x]
// [x,z]
// [x,z,z]
// [x,z,z,y]
// [x,z,z,y,x]

// [z]
// [z,z]
// [z,z,y]
// [z,z,y,x]

// [z]
// [z,y]
// [z,y,x]

// [y]
// [y,x]

// [x]
let totatCount = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        totatCount++
        
    }
    
}
console.log(totatCount);

