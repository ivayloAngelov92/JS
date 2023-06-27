function sightCheck(a,b,c){
    let arr=[]
    arr.push(a,b,c) 
    let isPositive=true
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            isPositive=!isPositive
        }
    }
    console.log(isPositive?
        `Positive`:
        `Negative`);
}

sightCheck(-6,

    -12,
    
    14)