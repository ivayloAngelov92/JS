function check(...arr) {
    let count = 0;
    arr.forEach(x=>{
        if (x<0) count++;
    })
    if(count%2==0){
        console.log("Positive");
    }else {console.log('Negative');}
}

check(5,
    12,
    -15)
