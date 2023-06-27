function solve (n){

    for(let rows=1; rows<=n; rows++){
        let printCurrentLine=""
        for(let coll=1; coll<=rows; coll++){
            // printCurrentLine+=rows+" "
            printCurrentLine+=`${rows} `
        }
        console.log(printCurrentLine);
    }
}
solve (5)