function solve (array){
    let students=new Map()
    for(let line of array){
        let studentArr = line.split(' ')
        let name = studentArr.shift()
        let grades = studentArr.map(Number)
        if(!students.has(name)){
            students.set(name,[])
        }
        for(let grade of grades){
            students.get(name).push(grade)
        }
    }
    let sorted=Array.from(students.entries()).sort((a,b)=>a[0].localeCompare(b[0]))
    for(let [name,grades] of sorted){
        let averageGrade=grades.reduce((a,b)=>a+b)/grades.length
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}

solve (['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3'])