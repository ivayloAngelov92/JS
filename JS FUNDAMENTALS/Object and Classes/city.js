function solve(object){
    // for (let key of Object.keys(object)){
    //     console.log(`${key} -> ${object[key]}`);
    // }
    let entries=Object.entries(object)
    for(let [key,value]of entries){
        console.log(`${key} -> ${value}`);
    }
}

solve ({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })