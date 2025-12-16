let userInfo = {
  name: "reetu singh",
  age: 16,
  address: "Delhi",
};

// make upper obj into the array


// let userInfoArr = Object.keys(userInfo);
// let userInfoArr = Object.values(userInfo);
let userInfoArr = Object.entries(userInfo);

console.log("userInfoArr :", userInfoArr);

let arrFormUserInfo = [];
for (const key in userInfo) {
  //   console.log([key, ":", userInfo[key]]);
  arrFormUserInfo.push([key, userInfo[key]]);
}
console.log("arrFormUserInfo", arrFormUserInfo);
console.log("userInfo :", userInfo);

// let objToArrWithMap = Object.keys(userInfo).map((key)=> {
//     return [key, userInfo[key]]
// })


// it will be in the array obj form
let objToArrWithMap = Object.keys(userInfo).map((key) => ({
   key : key,
   value : userInfo[key]
}));

console.log("objToArrWithMap", objToArrWithMap);
