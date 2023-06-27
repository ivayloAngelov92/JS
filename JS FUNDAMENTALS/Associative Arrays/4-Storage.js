function solve (input){
    let storage=new Map()
    for(let line of input){
        let [item, quantity]=line.split(' ')
        quantity=Number(quantity)
        if(storage.has(item)){
            quantity+=storage.get(item)
        }
        storage.set(item, quantity)
    }
    storage.forEach((value, key) => {
        console.log(`${key} -> ${value}`);
    });
}

solve (['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])