function solve (magicMatrix){
    isMagical=true
    let sumNubmer=[]
    for(let i =0; i<magicMatrix.length; i++){
        let sumRow=0
        let sumCol=0
        for(let j = 0; j<magicMatrix.length; j++){
            sumRow+=magicMatrix[i][j]
            sumCol+=magicMatrix[j][i]
        }
        sumNubmer.push(sumCol)
        sumNubmer.push(sumRow)
    }
    for(let k=0; k<sumNubmer.length-1;k++){
        if (sumNubmer[k]!==sumNubmer[k+1]){
            isMagical=false
            break
        }
    }
    console.log(isMagical);

}

solve ([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])