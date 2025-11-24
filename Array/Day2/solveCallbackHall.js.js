function A() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("A completed");
      res("User123");
    }, 1000);
  });
}

function B(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("B completed with", userId);
      res(["post1", "post2"]);
    }, 1000);
  });
}

function C(posts) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("C completed with", posts);
      res({ comment: "Nice post" });
    }, 1000);
  });
}

function D(comment) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("D completed with", comment);
      res("Final result done");
    }, 1000);
  });
}


/// there are two way to solve callback hall first one is asyn await and second is Promise

// solved by asyn await
// async function Wrapper() {
//   console.log("Starting...");

//   const userId = await A();
//   const posts = await B(userId);
//   const comments = await C(posts);
//   const finalResult = await D(comments);

//   console.log("All tasks done:", finalResult);
// }

// Wrapper();






// solved by Promise
function Wrapper() {
  console.log("Starting...");

  A()                       
    .then((userId) => {
      return B(userId);     
    })
    .then((posts) => {
      return C(posts);       
    })
    .then((comments) => {
      return D(comments);    
    })
    .then((finalResult) => {
      console.log("All tasks done:", finalResult);
    })
    .catch((err) => {
      console.error("Error happened:", err);
    });
}

Wrapper();