function solve(input) {

    let index = 0;
    let command = input[index];
    let totalSteps = 0

    while (command !== "Going home") {
        let stepCounter = Number(command);

        totalSteps += stepCounter

        if (totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
            return;
        }

        index++
        command = input[index];

    }
    index++
    totalSteps += Number(input[index]);
    if (totalSteps<10000){
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - 10000} steps over the goal!`);
    }
}

solve (["1500", "300", "2500", "3000", "Going home", "200"])