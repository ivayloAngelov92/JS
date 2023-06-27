function solve (arr){
    let newArr=[]
    let sumNewArr=0
    let sumArr=0
    for(let i=0; i<arr.length; i++){
        sumArr+=Number(arr[i])
        if(arr[i]%2==0){
            newArr[i]=Number(arr[i]+i)
        }else{
            newArr[i]=Number(arr[i]-i)
        }
        sumNewArr+=Number(newArr[i])
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
}

solve([5, 15, 23, 56, 35])