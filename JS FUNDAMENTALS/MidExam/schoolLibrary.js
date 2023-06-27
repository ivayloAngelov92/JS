function solve(array){
    let shelfBooks=array.shift().split('&')
    let commands=array.shift()
    while(commands!='Done'){
        let currentLine=commands.split(' | ')
        let switchCheck=currentLine[0].split(' ')
        switch(switchCheck[0]){
            case 'Add': if(shelfBooks.includes(currentLine[1])){break}
            shelfBooks.unshift(currentLine[1]);break
            case 'Take':if(shelfBooks.includes(currentLine[1])){
                let indexTake=shelfBooks.indexOf(currentLine[1])
                shelfBooks.splice(indexTake,1)
            };break
            case 'Swap': if(shelfBooks.includes(currentLine[1])&&shelfBooks.includes(currentLine[2])){
                let swapIndex=shelfBooks.indexOf(currentLine[1])
                let swapIndexTwo=shelfBooks.indexOf(currentLine[2])
                let buffer=shelfBooks[swapIndex]
                shelfBooks.splice(swapIndex,1,shelfBooks[swapIndexTwo])
                shelfBooks[swapIndexTwo]=buffer
            };break
            case 'Insert':if(shelfBooks.includes((currentLine[1]))){break}
            shelfBooks.push(currentLine[1]);break
            case 'Check': if(shelfBooks[(Number(currentLine[1]))]){
                
                console.log(shelfBooks[(Number(currentLine[1]))]);
            }break
        }
        commands=array.shift()
    }
    console.log(shelfBooks.join(', '));
}

solve (["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])