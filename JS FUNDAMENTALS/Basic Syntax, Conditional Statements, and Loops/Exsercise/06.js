function solve (start, end){
    let printCurrentLine=""
    let sum=0
    for(let i=start; i<=end; i++){
        // printCurrentLine+=i + " ";
        printCurrentLine+=`${i} `
        sum+=i
        
    }
    console.log(printCurrentLine)
    console.log(`Sum: ${sum}`);
}

solve (5, 10)