const persone = {
  name: "reetu",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

// persone.normal()
// persone.arrow()

let perFun = persone.normal
console.log(perFun);

perFun() // this is giving undefined because we are calling wihout obj here 




// here we are forcing out perFun to call the obj thats why we are getting this.name value
// perFun.call(persone)

// let perFun = persone.normal.bind(persone);
// perFun();