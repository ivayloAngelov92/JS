function solve (input){
    let object={}
    for(let line of input){
        let [country, town, cost]=line.split(' > ')
        cost=Number(cost)
        if(!object[country]){
            object[country]={}
        }
        if(!object[country][town]){
            object[country][town]=cost
        }
        if(object[country][town]>cost){
            object[country][town]=cost
        }
    }
    let sortedCountries=Object.keys(object).sort((a,b)=>a.localeCompare(b))
    for(let country of sortedCountries){
        let sorted=Object.entries(object[country]).sort((a,b)=>a[1]-b[1])
        let buffer=`${country} -> `
        for(let [city, price] of sorted){
            buffer+=`${city} -> ${price} `
        }
        console.log(buffer);
    }
}

solve ([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ])