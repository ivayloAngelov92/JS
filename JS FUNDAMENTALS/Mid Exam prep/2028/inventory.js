function solve(array){
    let inventory=array.shift().split(', ')
    let command=array.shift()
    while(command!=='Craft!'){
        let currentLine=command.split(' - ')
        switch(currentLine[0]){
            case 'Collect':if(inventory.includes(currentLine[1])){}else{
                inventory.push(currentLine[1])
            } break
            case 'Drop': if(inventory.includes(currentLine[1])){
                let dropIndex=inventory.indexOf(currentLine[1])
                inventory.splice(dropIndex,1)
            }; break
            case 'Combine Items':let items=currentLine[1].split(':')
                 if(inventory.includes(items[0])){
                let index=inventory.indexOf(items[0])
                inventory.splice(index+1,0,items[1])
            } ;break
            case 'Renew': if(inventory.includes(currentLine[1])){
                let renewIndex=inventory.indexOf(currentLine[1])
                let item=inventory[renewIndex]
                inventory.splice(renewIndex,1)
                inventory.push(item)
            } ;break
        }
        command=array.shift()
    }
    console.log(inventory.join(', '));
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])