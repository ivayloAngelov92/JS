function solve (...data){

    let tally={

    }
    data.forEach((element)=>{
        let type=typeof element
        console.log(`${type}: ${element}`);
        if(!tally[type]){
            tally[type]=0
        }
        tally[type]++
    })
    
    let sorted=Object.entries(tally).sort((a,b)=>b[1]-a[1])
    for(let [key,value]of sorted){
        console.log(`${key} = ${value}`);
    }
    
}

solve ('cat', 42, function () { console.log('Hello world!'); })