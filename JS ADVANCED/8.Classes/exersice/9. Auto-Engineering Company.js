function solve(arr) {
    let cars = {}

    arr.forEach((line) => {
        let [carBrand, model, quantity] = line.split(' | ')
        if (!cars[carBrand]) {
            cars[carBrand] = {}
        }
        if (!cars[carBrand][model]) {
            cars[carBrand][model] = 0
        }
        cars[carBrand][model] += Number(quantity)
    })
    for (let brand in cars) {
        console.log(brand);
        Object.entries(cars[brand]).forEach(model => console.log(`###${model[0]} -> ${model[1]}`))
    }
}

solve(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',

    'Citroen | C5 | 10'])