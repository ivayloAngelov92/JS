function solve(array) {
    let students = {}
    for (let line of array) {
        let studentArr = line.split(' ')
        let name = studentArr.shift()
        let grades = studentArr.map(Number)
        if (students[name]) {
            students[name]=students[name].concat(grades)
        } else {
            students[name] = grades
        }
    }
    let studentsSorted=Object.entries(students).sort((a,b)=>a[0].localeCompare(b[0]))
    for(let [name,grades] of studentsSorted){
        let averageGrade=grades.reduce((a,b)=>a+b)/grades.length
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])