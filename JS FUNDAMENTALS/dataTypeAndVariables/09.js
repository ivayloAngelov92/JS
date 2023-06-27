function solve (num){
    for (let i=1; i<=num; i++){
        let sum=0
        i=i.toString()
        index=0
        for(let m=1; m<=i.length;m++){
            sum+=Number(i[index])
            index++
        }
        if(sum==5||sum==7||sum==11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }

    }
}

solve (15)