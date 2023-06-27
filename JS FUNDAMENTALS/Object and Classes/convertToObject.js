function solve(string){
    let object=JSON.parse(string)
    let entries=Object.entries(object)
    for(let [key,value]of entries){
        console.log(`${key}: ${value}`);
    }

}

solve('{"name": "George", "age": 40, "town": "Sofia"}')