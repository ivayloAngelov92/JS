function solve (arr1, arr2){
    let sumArr1=0
    let sumArr2=0
    for(let i=0;i<arr1.length;i++){
        arr1[i]=Number(arr1[i])
        sumArr1+=arr1[i]
    }
    for(let j=0; j<arr2.length;j++){
        arr2[j]=Number(arr2[j])
        sumArr2 +=arr2[j]
    }
    let areEqual=true;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            areEqual=false;
            break
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sumArr1}`);
    }
}

solve (['1','2','3','4','5'],

['1','2','4','4','5'])