function solve(input) {
  let register = {};
  input.forEach((line) => {
    let [, name, grade, score] = line.match(
      /Student name: (\w+), Grade: (\d+), Graduated with an average score: (\d+\.\d+)/
    );
    if (score >= 3) {
      if (!register[grade]) {
        register[grade] = {
          students: [],
          totalScore: 0,
          count: 0,
        };
      }
      register[grade].students.push(name);
      register[grade].totalScore += Number(score);
      register[grade].count++;
    }
  });

  let sortedGrades = Object.keys(register).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );
  sortedGrades.forEach((grade) => {
    let gradeData = register[grade];
    let average = gradeData.totalScore / gradeData.count;
    let nextGrade = Number(grade) + 1;
    console.log(`${nextGrade} Grade`);
    console.log(`List of students: ${gradeData.students.join(', ')}`);
    console.log(`Average annual score from last year: ${average.toFixed(2)}`);
    console.log(``);
  });
}
solve([
  'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
  'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
  'Student name: George, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
  'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
  'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
  'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
  'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
  'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
  'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
  'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
  'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);
