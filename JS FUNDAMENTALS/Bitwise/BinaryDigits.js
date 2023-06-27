function solve (a,b){
    let zeroes=0
    let ones=0
    while(a>0){
        if(a%2==1){
            ones++
        }else{
            zeroes++
        }
        a/=2
        a=Math.floor(a)        
    }
    b=0? console.log(zeroes): console.log(ones);;
}

solve (15,1)