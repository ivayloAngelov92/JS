function solve(input){
    let text=input.shift()
    let code=input.shift()
    sumLower=0
    sumUpper=0
    for(let i=0;i<text.length;i++){
        let currentAmount=text.charCodeAt(i)
        if(currentAmount>=65&&currentAmount<=90){
            sumUpper+=currentAmount
        }else if(currentAmount>=97&&currentAmount<=122){
            sumLower+=currentAmount
        }
    }
    console.log(code==='LOWERCASE'?`The total sum is: ${sumLower}`:`The total sum is: ${sumUpper}`);
}

solve (['HelloFromMyAwesomePROGRAM',

'LOWERCASE'])