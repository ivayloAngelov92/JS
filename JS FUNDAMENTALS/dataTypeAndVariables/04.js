function solve(a, b, c) {
    let res = a + b + c
    console.log(res%1==0 ? `${res} - Integer` :`${res} - Float`);


    // if (res % 1 == 0) {
    //     console.log(`${res} - Integer`);
    // }else{
    //     console.log(`${res} - Float`);
    // }
}

solve(100, 200, 303.3)