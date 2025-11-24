function A(callback) {
  setTimeout(() => {
    console.log("A completed");
    callback();            // run next
  }, 1000);
}

function B(callback) {
  setTimeout(() => {
    console.log("B completed");
    callback();
  }, 1000);
}

function C(callback) {
  setTimeout(() => {
    console.log("C completed");
    callback();
  }, 1000);
}

function D(callback) {
  setTimeout(() => {
    console.log("D completed");
    callback();
  }, 1000);
}

function Wrapper() {
  console.log("Starting...");

  A(() => {
    B(() => {
      C(() => {
        D(() => {
          console.log("All tasks done!");
        });
      });
    });
  });
}

Wrapper();
