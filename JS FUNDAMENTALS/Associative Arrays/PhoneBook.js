function solve (array){
    let phoneBook={}

    for(let enty of array){
        let [name, number]=enty.split(' ')
        phoneBook[name]= number
    }
    for(let name in phoneBook){
        console.log(`${name} -> ${phoneBook[name]}`);
    }

}

solve (['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])