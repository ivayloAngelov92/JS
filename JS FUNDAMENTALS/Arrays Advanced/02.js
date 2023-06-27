function negativeOrPositiveNumbers(input){
    let res=[]
    for(let num of input){

        if(num<0){
            res.unshift(num)
        }else{
            res.push(num)
        }
    }
    console.log(res.join("\n"));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])