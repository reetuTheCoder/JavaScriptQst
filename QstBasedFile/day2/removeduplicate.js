let arr = ["x","x","z","z","y","x"];

let freq ={};

for (const key of arr) {
    freq[key] = (freq[key] || 0) + 1
}

console.log(freq);

let removedDupliacte = []

for (const key in freq) {
    removedDupliacte.push(key)

    // if (freq[key] > 1) {
    //     removedDupliacte.push(key)
    // }
    
    
}

console.log(removedDupliacte);
