function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
// fn1();
// fn1();



for (let i = 0; i < 3; i++) {
  // console.log(i)
  // setTimeout(() => console.log(i), 0);
}


console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");



