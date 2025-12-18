let arr = ["x", "x", "z", "z", "y", "x"];

let freq = new Map();

for (const key of arr) {
  freq.set(key, (freq.get(key) || 0) + 1);
}

console.log(freq);

let group = [];
////// order like this  [ 'y', 'z', 'z', 'x', 'x', 'x' ]



// for (const [key, value] of freq) {
//     for (let i = 0; i < value; i++) {
//         group.push(key)
        
//     }
// }

// console.log(group);


//////// order like this [ 'y', 'z', 'z', 'x', 'x', 'x' ]
let entries = [...freq.entries()].reverse();


// for (const [key, value] of entries) {
//     for (let i = 0; i < value; i++) {
//         group.push(key)
        
//     }
// }

// console.log(group);








//// order like this [ 'z', 'z', 'x', 'x', 'x', 'y' ]

let order = ["z", "x", "y"]; 


for (const key of order) {
    let value = freq.get(key);
    for (let i = 0; i < value; i++) {
        group.push(key)
        
    }
}

console.log(group);