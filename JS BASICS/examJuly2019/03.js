function solve(input){
    let drink=input[0]
    let sugar= input[1]
    let count=Number(input[2])
    let total=0

    switch(drink){
        case "Espresso":
            if(sugar=="Without"){
                total=count*0.9*0.65
            }else if(sugar=="Normal"){
                total=count*1
            }else if(sugar=="Extra"){
                total=count*1.2
            }
            if(count>=5){
                total=total*0.75
            }break;
        case "Cappuccino":
            if(sugar=="Without"){
                total=count*0.65
            }else if(sugar=="Normal"){
                total=count*1.2
            }else if(sugar=="Extra"){
                total=count*1.6
            }break;
        case "Tea":
            if(sugar=="Without"){
                total=count*0.5*0.65
            }else if(sugar=="Normal"){
                total=count*0.6
            }else if(sugar=="Extra"){
                total=count*0.7
            }break;
    }
    if (total>15){
        total=total*0.8
    }
    console.log(`You bought ${count} cups of ${drink} for ${total.toFixed(2)} lv.`);
}

solve(["Tea",
"Extra",
"3"])
