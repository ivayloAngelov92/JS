function solve (input){
    let n=Number(input.shift())
    let cars={}
    
    for(let i=0; i<n;i++){
        let [car,mileage,fuel]=input.shift().split('|')
        mileage=Number(mileage)
        fuel=Number(fuel) 
        cars[car]={mileage,fuel}
    }
    while(input[0]!=='Stop'){
        let currentLine=input.shift().split(' : ')
        let car=currentLine[1]
        if(currentLine[0]==='Drive'){
            let distance=Number(currentLine[2]) 
            let fuel=Number(currentLine[3])
            if(cars[car].fuel<fuel){
                console.log("Not enough fuel to make that ride");
            }else{
                cars[car].mileage+=distance
                cars[car].fuel-=fuel
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if(cars[car].mileage>=100000){
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car]
                }
            }
        }else if(currentLine[0]==='Refuel'){
            let fuel=Number(currentLine[2])
            if(cars[car].fuel+fuel>75){
                fuel=75-cars[car].fuel
            }
            cars[car].fuel+=fuel
            console.log(`${car} refueled with ${fuel} liters`);
        }else if(currentLine[0]==='Revert'){
            let kilometers=Number(currentLine[2])
            if(cars[car].mileage-kilometers<10000){
                cars[car].mileage=10000
            }else{
                cars[car].mileage-=kilometers
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
    for(let [key,value]of Object.entries(cars)){
        console.log(`${key} -> Mileage: ${value.mileage} kms, Fuel in the tank: ${value.fuel} lt.`);
    }
}

solve ([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )