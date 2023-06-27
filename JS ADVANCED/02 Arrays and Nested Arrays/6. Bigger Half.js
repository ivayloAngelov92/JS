function solve(array){
    let sorted=array.sort((a,b)=>a-b)
    let middle=sorted.slice(Math.floor(sorted.length/2))
    return middle
}

solve ([3, 19, 14, 7, 2, 19, 6])