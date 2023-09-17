function solve (arr){
    let sorted=arr.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
    for(let i=1; i<=sorted.length; i++){
        console.log(`${i}.${sorted[i-1]}`);
    }
}

solve (["John", 
"Bob", 
"Christina", 
"Ema"]
)