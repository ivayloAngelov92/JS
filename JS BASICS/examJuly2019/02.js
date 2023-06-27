function solve(input){
    let budget=Number(input[0])
    let nights=Number(input[1])
    let pricePerNight=Number(input[2])
    let addExpences=Number(input[3])/100

    if(nights>7){
        pricePerNight=pricePerNight*0.95
    }
    let total= (nights*pricePerNight)+(budget*addExpences)

    if(total<=budget){
        console.log(`Ivanovi will be left with ${(budget-total).toFixed(2)} leva after vacation.`);
    }else{
        console.log(`${(total-budget).toFixed(2)} leva needed.`);
    }
}

solve (["800.50",
"8",
"100",
"2"])
