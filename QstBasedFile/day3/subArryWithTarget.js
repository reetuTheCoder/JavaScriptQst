let arr = [1, 5, 4, 1, -2, 5];

let target = 3;

for (let i = 0; i < arr.length; i++) {
  const sub = [];
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sub.push(arr[j]);
    sum += arr[j];
    // console.log(sub, "sum", sum);

    if (sum === target) {
      console.log("sub1", sub);
      break;
    }
    if (sum > target) break;
  }
}
