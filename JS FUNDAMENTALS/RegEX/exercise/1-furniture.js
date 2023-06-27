function solve (input){
    let pattern=/>{2}(?<name>[A-Za-z]+)<{2}(?<price>\d+\.?\d+)!(?<quantity>\d+)/gm
    let total=0
    let command=input.shift()
    console.log('Bought furniture: ')
    while(command!=="Purchase"){
        //       let matches = command.matchAll(pattern);
        // for (let match of matches){
        //     console.log(match.groups.name);
        //     total += match.groups.price * match.groups.quantity;
        // }
        let matches=pattern.exec(command)
        while(matches!==null){
            console.log(matches.groups.name);
            total+=matches.groups.price*matches.groups.quantity
            matches=pattern.exec(command)
        }
        command=input.shift()
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);

}

solve (['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])