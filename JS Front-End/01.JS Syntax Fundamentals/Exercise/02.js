function solve (people, type, day){
    let price=0
    switch(type){
        case "Students":
            if(day== 'Friday'){
                price+=people*8.45
            }else if(day== 'Saturday'){
                price+=people*9.80
            }else if(day== 'Sunday'){
                price+=people*10.46
            }
            if(people>=30){price*=0.85}
            break;
        case "Business":
            if(day== 'Friday'){
                price+=people*10.90
                people>=100 ? price-= 10*10.9:null;
            }else if(day== 'Saturday'){
                price+=people*15.60
                people>=100 ? price-= 10*15.6:null;
            }else if(day== 'Sunday'){
                price+=people*16
                people>=100 ? price-= 10*16:null;
            }
            break;
            
        case "Regular":
            if(day== 'Friday'){
                price+=people*15
            }else if(day== 'Saturday'){
                price+=people*20
            }else if(day== 'Sunday'){
                price+=people*22.50
            }
            if(people>=10&&people<=20){price*=0.95}
            break;
    }
    console.log( `Total price: ${price.toFixed(2)}`);
}

solve (110,
    "Business",
    "Saturday"
    )