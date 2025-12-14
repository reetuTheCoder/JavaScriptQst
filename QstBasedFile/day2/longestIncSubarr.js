// let arr = ["x", "x", "z", "z", "y", "x"];
let arr = ["x", "y", "z"];

// [x]
// [x,y]
// [x,y,z]
// [y]
// [y,z]
// [z]

let longSubArr = [];
let maxlen = Infinity;

for (let i = 0; i < arr.length; i++) {
  let sub = [arr[i]]; // stored i first ele

  //   console.log("sub", sub);

  for (let j = i + 1; j < arr.length; j++) {
    // console.log(arr[j],"dfkjdskfj", arr[j-1]);

    if (arr[j] > arr[j - 1]) {
      sub.push(arr[j]);

      //  console.log("sub111", sub);
    }

    if (sub.length >= 2 && sub.length < maxlen) {
      maxlen = sub.length;
      longSubArr = sub;
    }
  }
}

console.log(maxlen, longSubArr);
