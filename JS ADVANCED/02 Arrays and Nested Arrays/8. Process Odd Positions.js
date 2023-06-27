function solve (arr){
    let sorted=arr.filter((el, index)=>index%2!==0).map(x=>x*2).reverse().join(' ')
    return sorted
}  

solve ([10, 15, 20, 25])