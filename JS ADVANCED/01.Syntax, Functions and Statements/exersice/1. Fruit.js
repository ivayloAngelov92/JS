function solve (fruit, grams, pricePerKilo){
    
    let kilos=grams/1000
    let money=kilos*pricePerKilo
    console.log(`I need \$${money.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}

solve ('orange', 2500, 1.80)

