function solve(input){
    let magicNum= Number(input[2]);
    let start=Number(input[0]);
    let end= Number(input[1]);
    let isFound=false;
    let counter= 0
    for(let i= start; i<=end; i++){
        for( let a= start; a<=end ; a++){
            let res= i + a;
            counter++
            if(res===magicNum){
                console.log(`Combination N:${counter} (${i} + ${a} = ${magicNum})`);
                isFound=true;
                break;
            }
        }if(isFound){
            break;
        }
    }
    if (!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
    
}

solve (["88", "888", "1000"])