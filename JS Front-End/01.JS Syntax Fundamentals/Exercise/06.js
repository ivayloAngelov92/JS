function solve (number){
    number=number.toString();
    let result =0
    for( let i = 0; i < number.length; i++ ){
        result+=Number(number[i])
    }
    console.log(result);
}

solve(245678)