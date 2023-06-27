function solve (matrix){
    let sum1=0
    let sum2=0
    let secondIndex=matrix[0].length-1
    matrix.forEach((array,index)=>{
        sum1+=array[index++]
        sum2+=array[secondIndex--]
    })
    console.log(`${sum1} ${sum2}`);
}

solve ([[20, 40],[10, 60]])