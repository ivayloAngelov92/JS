function solve(input){
    let days= Number(input[0])
    let typeApartment = input[1]
    let rating= input[2]
    let nights = days-1
    let totalprice= 0
    switch (typeApartment){
        case 'room for one person' :
            totalprice = 18* nights
            break
        case 'apartment':
            totalprice = 25*nights
            if(nights<10){
            totalprice= 0.7* totalprice;
        }else if (nights<=15){
            totalprice=totalprice*0.65
        }else {
            totalprice=totalprice*0.5
        }
            break
        case 'president apartment' :
            totalprice=35*nights
            if(nights<10){
                totalprice=totalprice*0.9
            }else if (nights<=15){
                totalprice=totalprice*0.85
            }else {
                totalprice=totalprice*0.8
            }
            break
    }
    if (rating=== 'positive'){
        totalprice=totalprice*1.25
    }else {
        totalprice= totalprice*0.9
    }
    console.log(totalprice.toFixed(2))
}

solve (["14",

"apartment",

"positive"])
// § "room for one person" – 18.00 лв за нощувка

// § "apartment" – 25.00 лв за нощувка

// § "president apartment" – 35.00 лв за нощувка