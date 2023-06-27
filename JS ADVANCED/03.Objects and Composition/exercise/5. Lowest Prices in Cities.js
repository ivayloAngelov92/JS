function solve (arr){
    let products={}
    arr.forEach((line)=>{
        let [town,product,price]=line.split(" | "); price=+price;
        if(!products[product]){
            products[product]={town,price}
        }else{
            if(products[product].price>price){
                products[product]={town,price}  
            }
        }         
    })
    for(let [product, info]of Object.entries(products)){
        console.log(`${product} -> ${info.price} (${info.town})`);
    }
}

solve (['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])