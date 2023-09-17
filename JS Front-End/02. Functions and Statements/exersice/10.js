function solve (a,b){
    let resA=1
    let resB=1
    for(let i=a; i>1; i--){
        resA*=i
    }
    for(let j=b; j>1; j--){
        resB*=j
    }
    console.log((resA/resB).toFixed(2));
}

solve (6,
    2)