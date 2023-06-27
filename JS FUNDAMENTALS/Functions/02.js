function mathPow(num, pow){
    let res=1
    for(let i=0; i<pow; i++){
        res*=num
    }
    console.log(res);
}

mathPow(2,8)