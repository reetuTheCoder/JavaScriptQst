const users = [
  { id: 1, name: "Ravi", age: 22, isActive: true },
  { id: 2, name: "Amit", age: 17, isActive: true },
  { id: 3, name: "Neha", age: 19, isActive: false },
  { id: 4, name: "Pooja", age: 25, isActive: true },
  { id: 5, name: "Karan", age: 16, isActive: false },
];

let activeAdults = users.filter((user) => {
  // console.log(user);
  return user.age > 18 && user.isActive === true;
});

console.log(activeAdults);
