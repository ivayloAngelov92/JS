function solve (arr, number){
    let result=[]
    for(let i=0; i<arr.length; i+=number){
        result.push(arr[i])
    }
    console.log(result);
}

solve (['1', 
'2',
'3', 
'4', 
'5'], 
6)