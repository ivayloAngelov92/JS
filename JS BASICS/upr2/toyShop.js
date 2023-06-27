function toyShop(input){
    let holidayprice = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll= Number(input[2]);
    let bear= Number(input[3]);
    let minion = Number(input[4]);
    let truck= Number(input[5]);
    
    let totalPuzzleprie = puzzle * 2.60;
    let totalDollPrice = doll * 3;
    let totalBearPrice = bear * 4.10;
    let totalMinion = minion * 8.20;
    let totalTruck = truck * 2; 

    let totalPrice = totalBearPrice + totalDollPrice + totalMinion+ totalPuzzleprie+ totalTruck;
    let totalCount = puzzle + doll+bear+minion+truck;
    if (totalCount>=50){
        let discount = 0.25 * totalPrice;
        totalPrice = totalPrice - discount;
    }
    let rentPrice = 0.1 * totalPrice;
    totalPrice = totalPrice - rentPrice;
    if (totalPrice>= holidayprice){
        console.log(`Yes! ${(totalPrice - holidayprice).toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${(holidayprice - totalPrice).toFixed(2)} lv needed.`)
    }
}

toyShop (["40.8",

"20",

"25",

"30",

"50",

"10"])