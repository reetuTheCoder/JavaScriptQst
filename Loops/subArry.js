let arr = [4, 5];

for (let i = 0; i < arr.length; i++) {
  let subArr = "";
  for (let j = i; j < arr.length; j++) {
    subArr += arr[j] + " ";
    console.log(subArr);
  }
}

