const seats = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
];

let no_of_row = seats.length;
let no_of_col = seats[0].length;
let printAllSeats = [];

let transposeSeats = [];
// console.log(no_of_row, no_of_col);

for (let i = 0; i < no_of_row; i++) {
//   console.log("transposeSeats = []", (transposeSeats[i] = []));
  transposeSeats[i] = [];


  for (let j = 0; j < no_of_col; j++) {
    // console.log([i],"dfdgjfd",[j]);
    printAllSeats.push(seats[i][j]);

     transposeSeats[i][j] = seats[j][i]
  }
}

console.log("printAllSeats", printAllSeats);
console.log("transposeSeats ------------",transposeSeats);
