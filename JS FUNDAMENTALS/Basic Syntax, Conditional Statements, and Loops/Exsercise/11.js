function solve(input) {
    let dayCounter = 0
    let bitcoinPrice = 11949.16
    let goldPrice = 67.51
    let firstPurchace = 0
    let bitCoin = 0
    let money = 0

    for (let i = 0; i < input.length; i++) {
        dayCounter++
        if (dayCounter % 3 == 0) {
            let goldDay = Number(input[i]) * 0.7
            money += goldDay * goldPrice
        } else {
            let goldDay = Number(input[i])
            money += goldDay * goldPrice
        }

        while (money >= bitcoinPrice) {
            bitCoin++
            money -= bitcoinPrice
            if (firstPurchace == 0) {
                firstPurchace = i + 1
            }
        }
    }
    console.log(`Bought bitcoins: ${bitCoin}`);
    if (firstPurchace > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchace}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124])