function solve (input){
    let cities={}
    while(input[0]!= "Sail"){
        let [city, population,gold]=input.shift().split('||')
        population=Number(population)
        gold=Number(gold)
        if(!cities[city]){
            cities[city]={population, gold}
        }else{
            cities[city].population+=population
            cities[city].gold+=gold
        }

    }
    while(input[0]!= "End"){
        let instructions=input.shift().split('=>')
        let town=instructions[1]
        if(instructions[0]==="Plunder"){
            let people=Number(instructions[2])
            let gold= Number(instructions[3])
            if(people>cities[town].population){people=cities[town].population}
            if(gold>cities[town].gold){gold=cities[town].gold}
            cities[town].population-=people
            cities[town].gold-=gold

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if(cities[town].population<=0|| cities[town].gold<=0){
                console.log(`${town} has been wiped off the map!`);
                delete cities[town]
            };
        }else if( instructions[0]=== 'Prosper'){
            let gold=Number(instructions[2])
            if(gold>=0){
                cities[town].gold+=gold
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }else{console.log("Gold added cannot be a negative number!")}
        }
    }
    ;
    if(Object.keys(cities).length>0){
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`)
        for(let [key, value]of Object.entries(cities)){
            console.log(`${key} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`);
        }
    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

solve (["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
