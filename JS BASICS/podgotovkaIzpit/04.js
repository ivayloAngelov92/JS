
    function solve(input) {
        let actor = input[0]
        let initialPoints = Number(input[1])
        let n = Number(input[2])
    
        let totalPoints = initialPoints
    
        for ( let i = 3; i < input.length; i += 2) {
            let judgeName = input[i];
            let pointsGiven = Number(input[i + 1]);
    
            let totalPointsFromJudge = judgeName.length * pointsGiven / 2
            totalPoints += totalPointsFromJudge
    
            if (totalPoints > 1250.5) {
                console.log(`Congratulations, ${actor} got a nominee for leading role with ${(totalPoints.toFixed(1))}!`);
                return;
            }
        }
        console.log(`Sorry, ${actor} you need ${((1250.5 - totalPoints).toFixed(1))} more!`);
    }
    


solve