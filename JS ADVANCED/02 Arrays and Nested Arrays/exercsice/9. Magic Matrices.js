function solve(matrix) {
    let isMagical=true
    let value=matrix[0].reduce((a,b)=>a+b,0)
    for(let row=0; row<matrix.length;row++){
        let sumCurrent=matrix[row].reduce((a,b)=>a+b,0)
        let sumColCur=0
        for(let col=0; col<matrix.length;col++){
            sumColCur+=matrix[row][col]           
        }
        if(sumCurrent!==value||sumColCur!==value){
            isMagical=false; break
        }
    }
    console.log(isMagical);
}

solve([
    [11, 32, 45], 
    [21, 0, 1], 
    [21, 1, 1]])