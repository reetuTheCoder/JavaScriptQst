const marks = [
  [80, 90, 85], // Student 1
  [70, 88, 92], // Student 2
  [60, 75, 78], // Student 3
];

console.log(marks.length);
console.log(marks[0].length);

let student_row = marks.length;
let student_col = marks[0].length;

let total = 0;

for (let i = 0; i < student_row; i++) {
  for (let j = 0; j < student_col; j++) {
    // console.log("dfhdsfhds", i, j);

    total += marks[i][j];
  }

  console.log(`student ${i + 1} and ${total}`);
}

console.log(total);




/// let traspose of marks


let transposeMarks = []

for (let i = 0; i < student_row; i++) {
    transposeMarks[i] = [];

    for (let j = 0; j < student_col; j++) {
        transposeMarks[i][j] = marks[j][i];
        
    }
    
}

console.log("transposeMarks", transposeMarks);
