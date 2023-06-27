function solve(input){
    let people=Number(input[0])
    let tax= Number(input[1])
    let price= Number(input[2])
    let umbrella=Number(input[3])

    let totalTax=people*tax
    let totalUmbrella=Math.ceil(people/2)*umbrella
    let totalPrice=Math.ceil(people*0.75)*price

    let amount=totalPrice+totalTax+totalUmbrella
    console.log(`${amount.toFixed(2)} lv.`);
}

solve (["50",
"6",
"8",
"4"])


