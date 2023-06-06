// Intermediate Capitalize
let uppercase = function (word) {
   return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(uppercase('i am a web developer'));

// Average Grade

function calculateGrades(mathGrade, physicsGrade, englishGrade) {
  let sum = mathGrade + physicsGrade + englishGrade;
  let average = sum / 3;

  console.log('Sum: ' + sum);
  console.log('Average: ' + average);
}

calculateGrades(3, 4, 5);  
