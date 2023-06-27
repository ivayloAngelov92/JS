function foodDelivery(input){
    let countChickenMenu = Number(input[0]);
    let countFishMenu = Number(input[1]);
    let countVegMenu = Number(input[2]);
    let delivery = Number(2.5);
    let Total = (countChickenMenu * 10.35) + (countFishMenu * 12.4) + (countVegMenu * 8.15);
    let res = (Total* 1.2) + delivery;
    console.log(res);

}

foodDelivery(["2 ",

"4 ",

"3 "])