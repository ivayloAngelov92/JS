function solve(input) {
    let wantedProfit = Number(input[0])
    let currentProfit = 0
    let index = 1
    let command = input[index]
    while (command !== "Party!") {
        let price = Number(command.length)
        index++;
        let count = Number(input[index])
        let check=count*price
        if (check%2 !==0) {
            currentProfit += price * count * 0.75
        } else {
            currentProfit += price * count
        }
        if (currentProfit >= wantedProfit) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${currentProfit.toFixed(2)} leva.`);
            return
        }
        index++
        command = input[index]

    }
    console.log(`We need ${(wantedProfit - currentProfit).toFixed(2)} leva more.`);
    console.log(`Club income - ${currentProfit.toFixed(2)} leva.`);
}

solve(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])



