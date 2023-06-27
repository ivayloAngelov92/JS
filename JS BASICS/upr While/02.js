function solve(input){
    let badScores= Number(input[0])
    let index=1

    let scoreCounter=0
    let problems=0
    let badScoresCounter=0
    command=input[index]
    
    while (command !== "Enough"){
        let score=Number(input[index+1])
        scoreCounter+=score
        problems++
        if (score<=4){
            badScoresCounter++
        }
        if (badScoresCounter>=badScores){
            console.log(`You need a break, ${badScores} poor grades.`);
            return;
        }


        index+=2
        command=input[index]
        
    }
    let avrgGrade= scoreCounter/problems
    console.log(`Average score: ${avrgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${problems}`);
    console.log(`Last problem: ${command=input[index-2]}`);
}

solve (["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])