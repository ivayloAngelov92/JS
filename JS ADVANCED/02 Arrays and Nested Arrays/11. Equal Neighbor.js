function solve(matrix) {
    let pairs=0
    for(let col=0; col<matrix[0].length;col++){
        for(let row=0; row<matrix.length-1; row++){
            let element=matrix[row][col]
            let nextEl=matrix[row+1][col]
            if(element===nextEl){pairs++}
        }
    }
    for(let row=0; row<matrix.length;row++){
        for(let col=0; col<matrix[0].length;col++){
            let el=matrix[row][col]
            let nextEl=matrix[row][col+1]
            if(el===nextEl){pairs++}
        }
    }
    return pairs
}

solve([
    ['2', '3', '4', '7', '0'],

    ['4', '0', '5', '3', '4'],

    ['2', '3', '5', '4', '2'],

    ['9', '8', '7', '5', '4']
])