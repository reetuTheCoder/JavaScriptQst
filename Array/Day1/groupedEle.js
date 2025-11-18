let color = ["red", "green", "pink", "purple", "gold"];

// Group colors by first letter

let grouped = color.reduce((acc, ele) => {
  let firstLetter = ele[0];

//   console.log(firstLetter);

  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }

  acc[firstLetter].push(ele);
  return acc;
}, {});

console.log(grouped);

// Group by even/odd index

let groupedBy = color.reduce((acc, ele, index) => {
  let key = index % 2 === 0 ? "even" : "odd";

  if (!acc[key]) acc[key] = [];
  acc[key].push(ele);

  return acc;
}, {});

// console.log(groupedBy);

// Group by index ranges (0–1, 2–3, etc.)

let groupedBYRang = color.reduce((acc, ele, index) => {
  let group = Math.floor(index / 2); // 2 items per group

  if (!acc[group]) acc[group] = [];
  acc[group].push(ele);

  return acc;
}, {});

// console.log(groupedBYRang);

// Group each item with its index (index → color)

let groupedByIndex = color.reduce((acc, ele, index) => {
  acc[index] = ele;
  return acc;
}, {});

// console.log(groupedByIndex);
