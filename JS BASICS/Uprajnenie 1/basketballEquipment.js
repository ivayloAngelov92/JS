function basketballEquipment(input){
    let yearTax = Number(input[0]);
    let shoes = Number(input[0] * 0.6);
    let sweater = Number(shoes * 0.8);
    let ball = Number(sweater * 0.25);
    let accesories = Number(ball * 0.2);
    let total = yearTax+ shoes + sweater + ball + accesories;
    console.log(total)
}

basketballEquipment(["365"])