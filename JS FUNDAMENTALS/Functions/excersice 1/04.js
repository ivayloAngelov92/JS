function oddAndEvenSum(num){
    let even=0
    let odd=0
    let numString=num.toString()
    for(let i=0; i<numString.length;i++){
        if(numString[i]%2==0){
            even+=Number(numString[i])
        }else{
            odd+=Number(numString[i])
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
oddAndEvenSum(1000435)