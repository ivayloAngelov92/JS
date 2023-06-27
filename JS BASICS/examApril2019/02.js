function solve(input){
    let budget=Number(input[0])
    let statistics=Number(input[1])
    let clothingPerStatistics=Number(input[2])
    if (statistics>150){
        clothingPerStatistics=clothingPerStatistics*0.9
    }
    let decor= budget*0.1
    let totalClothing=statistics*clothingPerStatistics
    let totalFilm=decor+totalClothing
    let moneyLeft= budget- totalFilm
    if(totalFilm>budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalFilm-budget).toFixed(2)} leva more.`);
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

solve (["15437.62",
"186",
"57.99"])




