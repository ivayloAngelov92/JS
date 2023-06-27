function solve(arr) {
    let max=arr.shift()
    let res=[max]
    arr.forEach(x=>{
        if(max<=x){
            max=x
            res.push(max)
        }
    })
    return res
    // let max=Number.MIN_SAFE_INTEGER
    // let res=arr.filter(el=>{
    //     if(max<=el){
    //         max=el
    //         return true
    //     }
    // })
    // console.log(res);
    // return res
}
solve([1,

    3,

    8,

    4, 10, 12, 3, 2, 24])