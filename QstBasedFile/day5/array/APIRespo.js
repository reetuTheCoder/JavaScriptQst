
const apiResponse = [
  {
    id: 1,
    full_name: "Ravi Kumar",
    age: 22,
    is_active: true,
    role: "admin",
  },
  {
    id: 2,
    full_name: "Amit Singh",
    age: 17,
    is_active: true,
    role: "user",
  },
  {
    id: 3,
    full_name: "Neha Sharma",
    age: 25,
    is_active: false,
    role: "user",
  },
];

// remove duplicate data

let unique = apiResponse.filter((user) => {
  return user.age > 18 && user.is_active === true;
});
console.log(unique);

let maps = apiResponse.map((user) => ({
  name: user.full_name,
  age: user.age,
  role: user.role,
}));

console.log(maps);



let group = apiResponse.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc
},{})

console.log("group", group);
