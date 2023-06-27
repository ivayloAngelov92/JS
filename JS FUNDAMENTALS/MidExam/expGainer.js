function solve(array){
    let neededExp=Number(array.shift())
    let countOfBattles=Number(array.shift())
    let expGained=0
    let battleCounts=0
    for(let i=1;i<=countOfBattles;i++){
        battleCounts++
        if(i%15==0){
            expGained+=array[i-1]*1.05
        }
        if(i%3==0){
            expGained+=array[i-1]*1.15
        }else if(i%5==0){
            expGained+=array[i-1]*0.9
        }else{expGained+=array[i-1]}
        if(expGained>=neededExp){
            console.log(`Player successfully collected his needed experience for ${battleCounts} battles.`);return
        }
    }
    console.log(`Player was not able to collect the needed experience, ${(neededExp-expGained).toFixed(2)} more needed.`);

}

solve (([500,
    5,
    50,
    100,
    200,
    100,
    20]))