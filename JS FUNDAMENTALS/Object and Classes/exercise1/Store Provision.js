function solve(stock, productsOrdered) {
    let total = {}
    let length = stock.length
    for (let i = 0; i < length; i += 2) {
        let currentProduct = stock[i]
        total[currentProduct] = Number(stock[i + 1])
    }
    for (let x = 0; x < productsOrdered.length; x += 2) {
        let currentProduct = productsOrdered[x]
        if (!total.hasOwnProperty(currentProduct)) {
            total[currentProduct] = 0
        }
        total[currentProduct] += Number(productsOrdered[x + 1])
    }
    for (let product in total) {
        console.log(`${product} -> ${total[product]}`);
    }
}

solve ([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])