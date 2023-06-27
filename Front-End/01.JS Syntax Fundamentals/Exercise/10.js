function solve (num){
    let digits= num.toString().split('').map(Number)
    let isConsistent= new Set(digits).size===1
    let sum= digits.reduce((a,b)=> a+b,0)
    console.log(isConsistent);
    console.log(sum);
    // let sum=0
    // let isSame = true
    // num=num.toString().split('')
    // let current=num[0]
    // num.forEach(x=>{
    //     sum+=Number(x)
    //     if(x!=current){isSame=false}
    // })
    // console.log(isSame);
    // console.log(sum);
}
solve (2221222)