function yardGreening(input){
    let pricePerSqrM = Number(7.61);
    let sqrMamount = Number(input[0]);
    let discount = Number(0.18);
    let totalCost = (pricePerSqrM * sqrMamount);
    let discountAmount = Number(totalCost * discount);
    let finalPrice = Number(totalCost - discountAmount);
    let res = `The final price is: ${finalPrice} lv.
The discount is ${discountAmount} lv.`;
    console.log(res);
}

yardGreening(["550"])