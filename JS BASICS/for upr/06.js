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

solve(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])