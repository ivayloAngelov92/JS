function factorialDivision(a,b){
    let sumA=1
    let sumB=1
    for(i=a;i>0;i--){
        sumA*=i
    }
    for(k=b;k>0; k--){
        sumB*=k
    }
    console.log((sumA/sumB).toFixed(2));
}

factorialDivision(5, 2)