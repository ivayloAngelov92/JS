function solve (arr){
    let sort=arr.sort((a,b)=>a-b)
    console.log(`${sort[0]} ${sort[1]}`)
    //console.log((array.sort((a, b) => a - b).slice(0, 2)).join(" "));
}

solve ([3, 0, 10, 4, 7, 3])