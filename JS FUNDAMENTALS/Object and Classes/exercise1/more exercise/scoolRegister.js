function schoolRegister(studentList) {
    let students = {};

        for (let student of studentList) {
            let current = student.split(', ');
            let studentName = current[0].split(': ').slice(-1).join();
            let grade = Number(current[1].split(': ').slice(-1).join());
            let score = Number(current[2].split(': ').slice(-1).join());

            if (score >= 3) {
                let student = {
                    name: studentName,
                    score: score,
                };
                if (!students.hasOwnProperty(grade)) {
                    students[grade] = [];
                }
                students[grade].push(student);
            }
        }
    

    //sort keys in object a-b
    let studentsSort = Object.keys(students).sort((a, b) => a - b);

    // start from min grade
    for (let el of studentsSort) {
        let average = 0;
        let counter = 0;
        let nameList = [];
        //check if current person object is in same grade
        for (let obj in students) {
            if (obj === el) {
                for (let studentObj of students[obj]) {
                    let personalScore = studentObj.score;
                    average += personalScore;
                    counter++;
                    nameList.push(studentObj.name)
                }
            } else {
                continue;
            }
            console.log(`${Number(el) + 1} Grade\nList of students: ${nameList.join(', ')}\nAverage annual score from last year: ${(average / counter).toFixed(2)}`);
            console.log();
            break;
        }
    }
}

schoolRegister([

    'Student name: George, Grade: 5, Graduated with an average score: 2.75',

    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',

    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',

    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',

    'Student name: John, Grade: 9, Graduated with an average score: 2.90',

    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',

    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'

])