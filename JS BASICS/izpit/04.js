function solve(input){
    let n=Number(input[0])

    let topStudents=0
    let goodStudents=0
    let averageStudents=0
    let failStudets=0

    let sumScore=0

    for(i=1; i<=n; i++){
        let score=Number(input[i])
        sumScore+=score
        if(score>=5){
            topStudents++;
        }else if(score>=4){
            goodStudents++
        }else if (score>=3){
            averageStudents++
        }else if (score<3){
            failStudets++
        }
    }
    let topStudentsPer=topStudents/n*100
    let goodStudentsPer=goodStudents/n*100
    let averageStudentsPer=averageStudents/n*100
    let failStudetsPer=failStudets/n*100
    let averageScore=sumScore/n
    console.log(`Top students: ${topStudentsPer.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodStudentsPer.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${averageStudentsPer.toFixed(2)}%`);
    console.log(`Fail: ${failStudetsPer.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`);
}

solve (["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])