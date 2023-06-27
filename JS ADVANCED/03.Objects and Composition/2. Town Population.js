function solve (arr){
    let cityData={}
    arr.forEach(x=>{
        let [name, population]= x.split(' <-> ')
        population=+population
        if(!cityData[name]){
            cityData[name]=0
        }
        cityData[name]+=population
    })
    Object.keys(cityData).forEach((city)=>console.log(`${city} : ${cityData[city]}`))
}

solve (['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])