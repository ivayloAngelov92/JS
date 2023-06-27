function solve (input){
    let numString=input.toString()
    let sum=0
    let isSame=true
    let firstLetter=numString[0]
    for(let i=0;i<numString.length; i++){
        if(firstLetter !==numString[i]){
            isSame=false
        }
        sum+=Number(numString[i])
    }
    console.log(isSame);
    console.log(sum);
}

solve (2222222)