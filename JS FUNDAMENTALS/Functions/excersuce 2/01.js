function carWash(arr){
    let sum=0
    for(i=0; i<arr.length; i++){
        let command=arr[i]
        switch(command){
            case 'soap' : sum+=10 ; break
            case 'vacuum cleaner': sum*=1.25; break
            case 'mud': sum*=0.9;break
            case 'water':sum*=1.2;break
        }
        if(sum>=100){
            console.log(`The car is 100% clean.`);
        }
    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}

carWash (["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"])