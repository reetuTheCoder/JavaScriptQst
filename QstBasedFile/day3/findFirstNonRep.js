let arr = ["x", "x", "z", "z", "y", "x"];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  //   console.log([i], "iiiiii", arr[i]);

  for (let j = 0; j < arr.length; j++) {
    if (i !== j && arr[i] === arr[j]) {
      // console.log(i !== j && arr[i] === arr[j]);

      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    console.log(arr[i]);
  }
}

let frq = {};
for (const key of arr) {
  frq[key] = (frq[key] || 0) + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (frq[arr[i]] === 1) {
    console.log("arr[i]", arr[i]);
  }
}


let maps = new Map()

for (const keys of arr) {
    maps.set(keys, (maps.get(keys) || 0) + 1)
}
console.log(maps);


for (let i = 0; i < arr.length; i++) {
    if (maps.get(arr[i]) === 1) {
        console.log("maps arr i", arr[i]);
        
    }
    
}