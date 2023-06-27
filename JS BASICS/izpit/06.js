function solve(input){
    let n=Number(input[0])
    let i= "" + n

    
    for(let a=1; a<=9; a++){
        for(let b=9; b>=a; b--){
            for(let c=1; c<=9; c++ ){
                for(let d=9; d>=c; d--){
                    let multipied= a*b*c*d
                    let sum=a+b+c+d
                    let divided=Math.floor(multipied/sum)
                    if(sum===multipied&& i[2]==="5"){
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    }else if(divided%3===0&& n%3 ===0) {
                        console.log(`${d}${c}${b}${a}`);
                        return;
                    }
                }
            }
        }
    }console.log("Nothing found");
}


solve (["123"]) 