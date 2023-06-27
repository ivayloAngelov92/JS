function shoppingList(arr){
    let rawList=arr.shift()
    let commands=arr.slice()    
    let shoppingList=rawList.split('!')
    let currentLine=commands.shift()
    while(currentLine!='Go Shopping!'){
        let lineArgs=currentLine.split(' ')
        let command=lineArgs[0]
        let firstArg=lineArgs[1]
        let secondArg=lineArgs[2]
        switch(command){
            case'Urgent': if(!shoppingList.includes(firstArg)){shoppingList.unshift(firstArg)};break
            case'Unnecessary':shoppingList=shoppingList.filter(x=>x !=firstArg);break
            case 'Correct':let updateIndex= shoppingList.indexOf(firstArg)
                if(updateIndex>-1){
                    shoppingList[updateIndex]=secondArg
                };break
            case 'Rearrange':
                 let removeIndex= shoppingList.indexOf(firstArg)
            if(removeIndex>-1){
                let element=shoppingList[removeIndex]
                shoppingList.splice(removeIndex,1)
                shoppingList.push(element)
            }
        }
        currentLine=commands.shift()
    }
    console.log(shoppingList.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion","Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])