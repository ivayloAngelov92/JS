function solve(input){
    let fruit=input[0];
    let size=input[1]
    let n=Number(input[2])
    let price=0
    switch(fruit){
        case "Watermelon":
            if(size==="small"){
                price=2*56
            }else{
                price=5*28.7
            }break;
        case "Mango":
            if(size==="small"){
                price=2*36.66
            }else{
                price=5*19.6
            }break;
        case "Pineapple":
            if(size==="small"){
                price=2*42.1
            }else{
                price=5*24.8
            }break;
        case "Raspberry":
            if(size==="small"){
                price=2*20
            }else{
                price=5*15.2
            }break;
    }
    let totalAmount= price*n
    if(totalAmount>=400 && totalAmount<=1000){
        totalAmount=totalAmount*0.85
    }else if (totalAmount>1000){
        totalAmount=totalAmount*0.5
    }
    console.log(`${totalAmount.toFixed(2)} lv.`);
}

solve (["Watermelon",
    "big",
    "4"])
