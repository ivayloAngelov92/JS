function solve(people, group, day){
    let totalPrice=0
    switch(day){
        case "Friday":
            if(group=="Students"){
                totalPrice=people*8.45
                if(people>=30){
                    totalPrice=totalPrice*0.85
                }
            }else if (group=="Business"){
                totalPrice=people*10.9
                if(people>=100){
                    totalPrice=totalPrice - 10*10.9
                }
            }else if (group=="Regular"){
                totalPrice=people*15
                if(people>=10&& people<=20){
                    totalPrice=totalPrice*0.95
                }
            }
            break;
        case "Saturday":
            if(group=="Students"){
                totalPrice=people*9.80
                if(people>=30){
                    totalPrice=totalPrice*0.85
                }
            }else if (group=="Business"){
                totalPrice=people*15.60
                if(people>=100){
                    totalPrice=totalPrice - 10*15.6
                }
            }else if (group=="Regular"){
                totalPrice=people*20
                if(people>=10&& people<=20){
                    totalPrice=totalPrice*0.95
                }
            }break;
        case "Sunday":
            if(group=="Students"){
                totalPrice=people*10.46
                if(people>=30){
                    totalPrice=totalPrice*0.85
                }
            }else if (group=="Business"){
                totalPrice=people*16
                if(people>=100){
                    totalPrice=totalPrice - 10*16
                }
            }else if (group=="Regular"){
                totalPrice=people*22.5
                if(people>=10&& people<=20){
                    totalPrice=totalPrice*0.95
                }
            }break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve (40, "Regular","Saturday")