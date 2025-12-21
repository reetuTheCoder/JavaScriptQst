let arr = [2, 0, 1, 2, 1, 0];

let lowPs = 0;
let midPs = 0;
let highPs = arr.length - 1;

while (midPs <= highPs) {
  if (arr[midPs] === 0) {
    [arr[lowPs], arr[midPs]] = [arr[midPs], arr[lowPs]];
    lowPs++;
    midPs++;
  }

  else if (arr[midPs] === 1) {
    midPs++
  }
  else {
   [ arr[midPs],arr[highPs]] = [arr[highPs], arr[midPs]];
   highPs--
  }
}

console.log(arr);
