function zooShop(input){
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    let dogFood = Number(2.5);
    let catFood = Number(4);
    let totalCost = (dogFood * dogFoodCount) + (catFood * catFoodCount);
    let res = `${totalCost} lv.`;
    console.log(res);
}

zooShop(["5", "4"])