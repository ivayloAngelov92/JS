function solve (arr){
    let sortedArr=arr.sort((a,b)=> a-b)
    let resultArr=[]
    while(sortedArr.length>0){
        resultArr.push(sortedArr.shift())
        resultArr.push(sortedArr.pop())
    }
    console.log(resultArr);
}

solve ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])