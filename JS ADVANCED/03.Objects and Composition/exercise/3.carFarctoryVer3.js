function solve({ model, power, color, carriage, wheelsize }) {
    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }
    let carriages = {
        hatchback: { type: 'hatchback', color: color },
        coupe: { type: 'coupe', color: color }
    }
    let wheels=wheelsize
    if (wheelsize%2===0) {
        wheels--
    }

    let engine = {}
    if (power <= 90) {
        engine = engines.small
    } else if (power <= 120) {
        engine = engines.normal
    } else {
        engine = engines.monster
    }
    let car={
        model,
        engine,
        carriage:{
            type:carriage,
            color
        },
        wheels: [wheels, wheels, wheels, wheels]
    }
    return car

}

console.log(solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
}));