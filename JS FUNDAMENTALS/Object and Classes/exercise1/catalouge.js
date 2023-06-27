function solve (inputData){
    let products={}
    
    for(el of inputData){
        let [productName, productPrice]=el.split(" : ")
        products[productName]=productPrice
    }
    let itemSort=Object.keys(products)
    itemSort=itemSort.sort((a,b)=> a.localeCompare(b))
    let letterHolder= ''
    for(let key of itemSort){
        let firstLetter=key.charAt(0)
        if(firstLetter===letterHolder){
            console.log(`   ${key}: ${products[key]}`);
        }else{
            letterHolder=firstLetter
            console.log(firstLetter);
            console.log(`   ${key}: ${products[key]}`);
        }
    }
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