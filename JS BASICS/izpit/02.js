function solve(input){
    let pocketMoney=Number(input[0])
    let profitPerDay=Number(input[1])
    let totalExpenses=Number(input[2])
    let gift=Number(input[3])

    let pocketMoneySaved=pocketMoney*5
    let profit=profitPerDay*5
    let totalSavedMoney=profit+pocketMoneySaved
    totalSavedMoney-=totalExpenses
    if(totalSavedMoney>=gift){
        console.log(`Profit: ${totalSavedMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(gift-totalSavedMoney).toFixed(2)} BGN.`);
    }
}

solve (["2.10",
"17.50",
"20.20",
"148.50"])

