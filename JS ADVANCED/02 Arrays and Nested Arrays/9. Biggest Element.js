function solve (arr){
    let max=Math.max(...arr[0])
    for(let row=1;row<arr.length;row++){
        let rowMax=Math.max(...arr[row])
        rowMax>max? max=rowMax: null;
    }
    return max
}

solve ([[20, 50, 10],

    [8, 33, 145]])