function solve (input){
    const products= input.reduce((acc,curr)=>{
        let [key,val] = curr.split(' : ')
        acc[key] = Number(val)
        return acc
    }, {})

    let sorted= Object.keys(products).sort()
    let letter=''
    sorted.forEach(product=>{
        if(product[0]!==letter){
            letter=product[0]
            console.log(letter);
        }
        console.log(`  ${product}: ${products[product]}`);
    })
}

solve ([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])