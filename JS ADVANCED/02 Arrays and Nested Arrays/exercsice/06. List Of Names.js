function solve (arr){
    arr.sort((a,b)=>a.localeCompare(b))
    .map((el,number)=>console.log(`${++number}.${el}`))
    
}

solve (["John",

"Bob",

"Christina",

"Ema"])