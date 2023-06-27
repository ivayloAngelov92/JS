function solve(text) {
    let allCars = text[0].split('>>')
    let arrLength = allCars.length
    let totalTaxCollected = 0
    for (let i = 0; i < arrLength; i++) {
        let command = allCars[i].split(' ')
        let carType = command[0]
        let taxYears = Number(command[1])
        let kilometers = Number(command[2])
        let currentTax = 0
        switch (carType) {
            case 'family': currentTax += 50 - (taxYears * 5) + (Math.floor(kilometers / 3000) * 12)
            totalTaxCollected+=currentTax
            console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`); break
            case 'heavyDuty': currentTax+=80-(taxYears*8)+ (Math.floor(kilometers / 9000) * 14)
            totalTaxCollected+=currentTax
            console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`); break
            case 'sports': currentTax += 100 - (taxYears * 9) + (Math.floor(kilometers / 2000) * 18)
            totalTaxCollected+=currentTax
            console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`) ; break
            default: console.log('Invalid car type.');
        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);
}

solve([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ])