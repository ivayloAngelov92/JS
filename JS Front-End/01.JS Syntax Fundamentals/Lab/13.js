function solve (arr){
    let odd=0
    let even=0
    arr.forEach(x=>{
        if(x%2==0){
            even+=x
        }else{
            odd+=x
        }
    })
    console.log(even-odd);
}
solve ([2,4,6,8,10]  )