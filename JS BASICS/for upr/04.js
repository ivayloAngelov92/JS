function solve(input) {
    let age = Number(input[0])
    let price = Number(input[1])
    let pricePerToy = Number(input[2])
    let totalMoney = 0
    let toysCount = 0

    for (i = 1; i <= age; i++) {
        if(i%2!= 0){
            toysCount += 1

        } else {
            totalMoney += 10* i/2
        }
       
    }
    let moneyFromToys = toysCount * pricePerToy
    let brotherCharge = Math.floor(age / 2)
    totalMoney = totalMoney + moneyFromToys - brotherCharge
    if (totalMoney >= price) {
        console.log(`Yes! ${(totalMoney - price).toFixed(2)}`);
    } else {
        console.log(`No! ${(price - totalMoney).toFixed(2)}`);
    }
}

solve(["21",

"1570.98",

"3"])