function computerStore(array){
    let commandLine=array.shift()
    let price=0
    while(commandLine!=="special"&& commandLine!=="regular"){
        commandLine=Number(commandLine)
        if(commandLine<0){
            console.log("Invalid price!" );
        }else{
            price+=commandLine
        }
        commandLine=array.shift()
    }
    let taxes=price*0.2
    let priceTax=price+taxes
    if(commandLine=='special'){
        priceTax*=0.9
    }
    if(price==0){
        console.log('Invalid order!');
    }else{
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${priceTax.toFixed(2)}$`);
    }
}

computerStore ([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])