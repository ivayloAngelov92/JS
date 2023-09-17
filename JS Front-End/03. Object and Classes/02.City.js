function solve (object){
    // const entries = Object.entries(object);
    // for(let [key, value] of entries){
    //     console.log(`${key} -> ${value}`);
    // } 
    // for( let key in object) {
    //     console.log(`${key} -> ${object[key]}`);
    // }
    Object.entries(object).forEach(function ([key, value]){
        console.log(`${key} -> ${value}`);
    })
}
solve ({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   })

