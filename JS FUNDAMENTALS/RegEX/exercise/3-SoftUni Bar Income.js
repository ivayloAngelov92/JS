function solve(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/
    let totaIncome = 0
    let command = input.shift()
    while (command !== 'end of shift') {
        let match = pattern.exec(command)
        if(match){
            let customer=match.groups.customer
            let product=match.groups.product
            let count=Number(match.groups.count)
            let price=Number(match.groups.price)
            totaIncome+=price*count
            console.log(`${customer}: ${product} - ${(count*price).toFixed(2)}`);
        }
        command = input.shift()
    }
    console.log(`Total income: ${totaIncome.toFixed(2)}`);

}

solve(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])