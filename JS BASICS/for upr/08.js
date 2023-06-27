function solve(input) {
    let n = Number(input[0])
    let startingPoints = Number(input[1])

    let poitsWon = 0
    let tournamentWon=0

    for (let i = 2; i <=input.length; i++) {
        let res = input[i]
        if (res === "W") {
            poitsWon += 2000
            tournamentWon +=1
        } else if (res === "F") {
            poitsWon += 1200
        } else if(res=== "SF") {
            poitsWon += 720
        }
    }
    let finalPoints= startingPoints + poitsWon
    console.log(`Final points: ${finalPoints}`);

    let averagePoints = Math.floor(poitsWon/ n)
    console.log(`Average points: ${averagePoints}`);

    let percentWon= (tournamentWon/n)*100
    console.log(`${percentWon.toFixed(2)}%`);
}

solve(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])