function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let time = Number(input[1]);
    let annualInterest = Number(input[2]/ 100);
    let res = depositAmount + time * ((depositAmount * annualInterest)/ 12);
    console.log(res);
}


depositCalculator(["2350", "6 ", "7 "])