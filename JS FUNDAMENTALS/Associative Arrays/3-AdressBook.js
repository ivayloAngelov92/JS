function solve (array){
    let adressBook={}
    for(let line of array){
        let [name, adress]= line.split(":")
        adressBook[name]=adress
    }
    let sortedAdress=Object.entries(adressBook)
    sortedAdress.sort((kvpA,kvpB)=>kvpA[0].localeCompare(kvpB[0]))
    for(let [name,address] of sortedAdress){
        console.log(`${name} -> ${address}`);
    }
}

solve (['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])