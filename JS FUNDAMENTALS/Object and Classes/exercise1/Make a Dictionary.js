function solve(array){
    let object={}
    for(let el of array){
        let currentObj=JSON.parse(el)
        Object.assign(object,currentObj)
    }
    let dictionary=Object.keys(object)
    dictionary.sort((a,b)=>a.localeCompare(b))
    dictionary.forEach(key=>console.log(`Term: ${key} => Definition: ${object[key]}`))
}

solve ([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])