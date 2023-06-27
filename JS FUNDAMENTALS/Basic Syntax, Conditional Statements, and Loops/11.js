function solve (n){
    let totalSum=0
    for(let i=1; i<=n*2; i+=2){
        totalSum+=i
        console.log(i);
    }
    console.log(`Sum: ${totalSum}`);
}

solve (5)