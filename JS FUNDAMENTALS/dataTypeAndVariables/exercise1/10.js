function solve(startingYield){
    let days=0
    let storage=0  
    while(startingYield>=100){
        days++
        storage+=startingYield
        startingYield-=10
        storage-=26
    }
    storage-=26
    if(storage<0){
        storage=0
    }
    console.log(days);
    console.log(storage);
}

solve (450)