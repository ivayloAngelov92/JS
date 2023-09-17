function solve (number){
    let result=[]
    for (let i=1; i<=10; i++){
        result.push(`${number} X ${i} = ${number*i}`)
    }
    console.log(result.join("\n"));
}
solve (2)