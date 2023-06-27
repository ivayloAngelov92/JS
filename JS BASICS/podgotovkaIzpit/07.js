function solve(input){
    let index=0
    let command=input[index]

    let bestPlayerName=""
    let bestPlayerGoal=0
    while(command!=="END"){
        let name=command
        index++
        let goals=Number(input[index])

        if(goals>bestPlayerGoal){
            bestPlayerName=name
            bestPlayerGoal=goals
        }

        if(goals>=10){
            break;
        }
        index++
        command=input[index]
    }
    console.log(`${bestPlayerName} is the best player!`);
    if(bestPlayerGoal>=3){
        console.log(`He has scored ${bestPlayerGoal} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${bestPlayerGoal} goals.`);
    }
}

solve (["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
