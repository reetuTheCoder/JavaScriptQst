// let arr = ["x", "x", "z", "z", "y", "x"];
// let arr = ["x", "y", "z"];
// let arr = ["x", "y", "z", "z", "a", "b", "b", "c"];
let arr = ["a", "b", "c", "c", "d"];


// [x]
// [x,y]
// [x,y,z]
// [y]
// [y,z]
// [z]

let longSubArr = [];
let maxlen = 1;

for (let i = 0; i < arr.length; i++) {
  let sub = [arr[i]];
  let checkEle = new Set([arr[i]]);

  // console.log("check", checkEle);

  //   console.log("sub", sub);

  for (let j = i + 1; j < arr.length; j++) {
    // console.log(arr[j],"dfkjdskfj", arr[j-1]);

    if (arr[j] > arr[j - 1] && !checkEle.has(arr[j])) {
      sub.push(arr[j]);
      checkEle.add(arr[j]);

      // console.log("check", checkEle);
    } else {
      break;
    }

    if (sub.length > maxlen) {
      maxlen = sub.length;
      longSubArr = sub;
    }
  }
}

console.log(maxlen, longSubArr);
